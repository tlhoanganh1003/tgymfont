let apiRoot = '';

if (import.meta.env.VITE_BUILD_MODE === 'development') {
  apiRoot = import.meta.env.VITE_API_ROOT_DEV;
} else if (import.meta.env.VITE_BUILD_MODE === 'production') {
  apiRoot = import.meta.env.VITE_API_ROOT_PROD;
}

export const API_ROOT = apiRoot;