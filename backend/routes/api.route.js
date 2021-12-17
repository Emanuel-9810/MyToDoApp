const router = require('express').Router();
const {google} = require('googleapis')

//Client ID, client secret, and routing to frontend
const oauth2Client = new google.auth.OAuth2(
  '779331463233-5ltfu9abnik6qsbe7rhgareeojnodium.apps.googleusercontent.com',
  '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',
  'http://localhost:3000'
)

//This should be changed to refresh token from database, not hardcoded
const REFRESH_TOKEN = "1//066MOMkwo8jogCgYIARAAGAYSNwF-L9IrUm1idrUuC-2n-4jmCNiRBBLYNItu-qw4mkTbrriflyjxH37ABqrzkd6SFfEbb_EZAiQ"

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async(req,res,next)=>{
  try {
    const {code} = req.body
    const {tokens} = await oauth2Client.getToken(code)
    res.send(tokens)
  } catch (error) {
    next(error)
  }
})

router.post('/create-event', async(req,res,next)=>{
  try {
    const{
      summary, description, location, startDateTime, endDateTime
    } = req.body
    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
    const calendar = google.calendar('v3')
    const response = await calendar.events.insert({
      auth: oauth2Client,
      calendarId: 'primary',
      requestBody: {
        summary: summary,
        description: description,
        location: location,
        colorId: '1',
        start:{
          dateTime: new Date(startDateTime)
        },
        end:{
          dateTime: new Date(endDateTime)
        },
      }
    })
    res.send(response)
  } catch (error) {
    next(error)
  }
})


module.exports = router;
