import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import * as monaco from 'monaco-editor';

// todo limit
import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';

// const editorRoot = document.getElementById('editor-root') as HTMLDivElement;
// const EditorPortal = ({children}: {children: React.ReactNode}) =>
//   ReactDOM.createPortal(children, editorRoot);

global.MonacoEnvironment = {
  getWorkerUrl(_moduleId: string, label: string) {
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  }
};

monaco.languages.typescript.typescriptDefaults.addExtraLib(
  require('raw-loader!../../../node_modules/@types/react/index.d.ts'),
  'react.d.ts'
);

monaco.languages.typescript.typescriptDefaults.addExtraLib(
  `
  declare function render(Component: React.ReactNode): void;
  declare var LiveLogger: any;
  `,
  'foo.d.ts'
);

const modelRef = monaco.editor.createModel(
  '',
  'typescript',
  monaco.Uri.parse('foo.tsx')
);

interface Props {
  code: string;
  onError: (error: Error) => void;
  onChange: (nextCode: string) => void;
  noImplicitAny: boolean;
  noSemanticValidation: boolean;
  noSyntaxValidation: boolean;
}

// only one editor per slide
let id = 0;
let editorRef: monaco.editor.IStandaloneCodeEditor | null = null;

class MonacoEditor extends Component<Props, {}> {
  id: number;
  mouted: boolean;
  editorRootEl: HTMLDivElement | null = null;
  constructor(props: Props) {
    super(props);
    this.id = ++id;
    this.mouted = false;
    this.onRef = this.onRef.bind(this);
    this.layout = this.layout.bind(this);
  }
  componentDidMount() {
    this.mouted = true;

    window.setTimeout(() => {
      if (this.mouted && this.editorRootEl) {
        this.dispose();
        // compiler option
        const {
          noImplicitAny = false,
          noSemanticValidation = false,
          noSyntaxValidation = false
        } = this.props;

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          noEmit: true,
          noImplicitAny,
          sourceMap: false,
          jsx: 2
        });
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation,
          noSyntaxValidation
        });
        //
        editorRef = monaco.editor.create(this.editorRootEl, {
          model: modelRef,
          theme: 'vs-dark',
          minimap: {enabled: false},
          // fix fixedOverflowWidgets
          fixedOverflowWidgets: true,
          fontSize: 16
        });

        editorRef.onDidChangeModelContent(() => {
          if (this.mouted && editorRef) {
            const value = editorRef.getValue();
            this.props.onChange(value);
          }
        });

        const setModelMarkers = monaco.editor.setModelMarkers;
        monaco.editor.setModelMarkers = (_model, owner, markers) => {
          setModelMarkers.call(monaco.editor, _model, owner, markers);
          if (markers.length > 0 && this.mouted) {
            const messages = markers.map(m => m.message);
            this.props.onError(new Error(['From ts', ...messages].join('\n')));
          }
        };

        modelRef.setValue(this.props.code);
        window.addEventListener('resize', this.layout);
      }
    }, 300);
  }
  componentWillUnmount() {
    this.mouted = false;
    if (this.id === id) {
      this.dispose();
    }
    window.removeEventListener('resize', this.layout);
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: '#1e1e1e',
          direction: 'ltr',
          textAlign: 'left',
          height: '100%',
          width: '100%'
        }}
        ref={this.onRef}
      />
    );
  }
  dispose() {
    if (editorRef) {
      editorRef.dispose();
      editorRef = null;

      modelRef.setValue('');
    }
  }
  layout() {
    if (editorRef) {
      editorRef.layout();
    }
  }
  onRef(ref: null | HTMLDivElement) {
    this.editorRootEl = ref;
  }
}

export default MonacoEditor;
