export const messages = {
  common: {
    badId: 'Передан некорректный _id',
  },
  user: {
    notFound: 'Пользователь по указанному _id не найден',
    createBadData: 'Переданы некорректные данные при создании пользователя',
    updateBadData: 'Переданы некорректные данные при обновлении профиля',
    updateWrongFields: 'Переданы некорректные поля для обновления пользователя',
  },
  card: {
    notFound: 'Карточка с указанным _id не найдена',
    badData: 'Переданы некорректные данные при создании карточки',
    deleted: 'Карточка успешно удалена',
  },
};

export const statuses = {
  badRequest: 400,
  notFound: 404,
  default: 500,
};
