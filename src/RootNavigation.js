import * as React from 'react';

export const navigationRef = React.createRef();

export function reset(name) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: name }],
  });
}

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function dispatch(name) {
  navigationRef.current?.dispatch(name);
}

export function goBack() {
  navigationRef.current?.goBack();
}
