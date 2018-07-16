import after from '../after.js'

const saves = ['profile', 'settings'];

const done = after(saves.length, function () {
  return 'done saving!';
});
console.log('콜백함수 자체를 반환함 처리되지 않은 인자가 존재할시 대기 상태: ', done);

