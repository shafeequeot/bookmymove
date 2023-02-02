export default function handler(req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.hostinger.com",
        auth: {
          user: 'booking@bookmymove.ae',
          pass: 'bookMy#Admin23',
        },
        secure: true,

        // tls: {
        //     // must provide server name, otherwise TLS certificate check will fail
        //     servername: "hostinger.com"
        // }
      })

      transporter.verify( function(err, succs){
        if(err) console.log(err)
        else console.log('oke', succs)
      } )
      
      const mailData = {
          from: 'booking@bookmymove.ae',
          to: 'info@bookmymove.ae',
          subject: `New booking from ${req?.body?.userName}`,
        text: `Your booking has been recieved as below` ,
        html: `<div>
        <p>Dear Admin,</p>
        <h1>We have new booking from: ${req?.body?.userName}</h1>
       
            <p>Please find the booking details below:</p>
            <div>
           
            <div><strong>Customer Name:</strong> ${req?.body?.userName}</div>
            <div><strong>Mobile:</strong> ${req?.body?.mobile}</div>
            <div><strong>Email:</strong> ${req?.body?.email}</div>
                      
            </div>
            <ul>
            <li><strong>Booking Type:</strong> ${req?.body?.booking?.type}</li>
            <li><strong>Category:</strong> ${req?.body?.booking?.category}</li>
            <li><strong>Item:</strong> ${req?.body?.booking?.item}</li>
            <li><strong>Moving From:</strong> ${req?.body?.booking?.movingfrom}</li>
            <li><strong>Moving to:</strong> ${req?.body?.booking?.movingto}</li>
            <li><strong>Moving Date:</strong> ${req?.body?.booking?.date}</li>
            </ul>
        </div>`
       
    }

    const thankMailData = {
        from: 'booking@bookmymove.ae',
        to: req?.body?.email,
        subject: `Thank you for your booking`,
      text: `Your booking has been recieved as below` ,
      html: `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Thank You for Your Booking</title>
        </head>
        <body>
          <h1>Thank You for Your Booking!</h1>
          <p>Dear ${req?.body?.userName},</p>
          <p>Thank you for booking our service. We appreciate your business and are thrilled that you have chosen us to be a part of your moving.</p>
          <p>Please find the details of your booking below:</p>
          <ul>
            <li><strong>Date:</strong> ${req?.body?.booking?.date}</li>
            <li><strong>from:</strong> ${req?.body?.booking?.movingfrom}</li>
            <li><strong>to:</strong> ${req?.body?.booking?.movingto}</li>
          </ul>
          <p>If you have any questions or concerns, please don't hesitate to reach out to us. </p>
          <p>Best regards,</p>
          <p>Bookmymove</p>
          <p>info@bookmymove.ae</p>
          <p>call: 600 55 32 35</p>
        </body>
      </html>`
     
  }
    
    
    transporter.sendMail(mailData, function(err, info){
        if (err) (console.log('something error', err))
        else    transporter.sendMail(thankMailData, function(err, info){
        
        res.status(200).json(info)
        })
    })
    
    
  }
  