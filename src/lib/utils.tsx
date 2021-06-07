export const isValidId = (userId: string) => {
  const regExp = /^[a-zA-Z0-9]{4,12}$/;
  return regExp.test(userId);
};

export const isValidPw = (password: string) => {
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
  return regExp.test(password);
};

export const DateFormat = (date: Date): string => {
  const today = new Date();
  const upload = new Date(date);
  const calcMin = Math.floor((today.getTime() - upload.getTime()) / 1000 / 60);
  const calcHour = Math.floor(calcMin / 60);
  const calcDay = Math.floor(calcMin / 60 / 24);

  if (calcMin < 1) return '방금 전';
  if (calcMin < 60) return `${calcMin}분 전`;
  if (calcHour < 24) return `${calcHour}시간 전`;
  if (calcDay < 7) return `${calcDay}일 전`;

  return upload.toLocaleString().substr(0, 12);
};
