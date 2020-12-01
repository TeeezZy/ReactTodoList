import { showAlert } from './actions';
import { CREATE_POST } from './types';

const forbidden = ['kokot', 'picha', 'tynyk'];

// export function forbiddenWordsMiddleware

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((word) =>
          action.payload.title.includes(word)
        );
        if (found.length) {
          return dispatch(showAlert('Spam!'));
        }
      }
      return next(action);
    };
  };
}
