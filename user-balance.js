const userBalances = new Map();

export default function handler(req, res) {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id is required' });
  }

  // Получаем баланс или 0, если пользователь новый
  const balance = userBalances.get(user_id) || 0;

  res.status(200).json({ balance });
}

// Временно экспортируем userBalances для других файлов
export { userBalances };