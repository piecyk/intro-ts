declare var require: (path: string) => string;
declare var global: {
  MonacoEnvironment: {
    getWorkerUrl: (moduleId: string, label: string) => string;
  };
};

declare module 'presentation/ui/ComponentPlayground';

declare module 'prop-types';
declare module '@babel/standalone';
declare module 'spectacle';
declare module 'spectacle/lib/components/fullscreen-button';
declare module 'spectacle/lib/themes/default';
declare module 'emoji-mart';
declare module 'react-portal';

declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
