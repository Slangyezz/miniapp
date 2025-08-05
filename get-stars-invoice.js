export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const TG_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

  const { user_id, amount } = req.body;
  const payload = `stars_${amount}_${user_id}`;

  try {
    const resp = await fetch(`${TG_API}/createStarsInvoice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id,
        title: `${amount} Stars`,
        description: `Покупка ${amount} Stars`,
        currency: 'USD',
        amount,
        payload,
      }),
    });
    const data = await resp.json();
    res.status(200).json({ slug: data.result.slug });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка создания инвойса' });
  }
}
