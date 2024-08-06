
import { NextApiRequest, NextApiResponse } from 'next';
import { LeadData } from '../../../actions/leads'; // Assuming you have the LeadData interface defined in your actions/leads.ts file

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const leadData: LeadData = req.body; // Assuming the request body contains the LeadData

    try {
      const response = await fetch('https://app.ninjapipe.com/api/v1/contacts/create', {
        method: 'POST',
        headers: {
          "Authorization": "noauth <token>", // Replace with your actual Ninjapipe API token
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "category": "Lead",
          "first_name": leadData.name, // Use the name from the request body
          "last_name": "", // Or you can use a default value
          "picture_url": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
          "email": leadData.email, // Use the email from the request body
          // ... other fields you want to send to Ninjapipe
        }),
      });

      const data = await response.json();

      if (response.ok) {
        res.status(200).json({ message: 'Lead saved successfully', data });
      } else {
        res.status(500).json({ message: 'Error saving lead', error: data });
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      res.status(500).json({ message: 'Error saving lead', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
