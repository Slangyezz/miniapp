import { balances } from './user-balance';

export default function handler(req, res) {
  const update = req.body;

  if (update.stars_payment) {
    const { user, amount } = update.stars_payment;
    if (!balances[user.id]) balances[user.id] = 0;
    balances[user.id] += amount;
    console.log(`User ${user.id} bought ${amount} stars`);
  }

  res.status(200).end();
}
    // Telegram WebApp API
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user;

    if (user) {
      document.getElementById('userFullName').textContent = `${user.first_name || ''} ${user.last_name || ''}`.trim();
      document.getElementById('userUsername').textContent = user.username ? `@${user.username}` : '';
      if (user.photo_url) {
        document.getElementById('userAvatar').src = user.photo_url;
      } else {
        document.getElementById('userAvatar').src = 'https://via.placeholder.com/64';
      }
    } else {
      document.getElementById('userFullName').textContent = 'Гость';
      document.getElementById('userUsername').textContent = '';
      document.getElementById('userAvatar').src = 'https://via.placeholder.com/64';
    }