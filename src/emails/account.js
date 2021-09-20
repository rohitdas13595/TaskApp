const sgMail=require('@sendgrid/mail')
const sengridAPIKey=process.env.SENDGRID_API_KEY

sgMail.setApiKey(sengridAPIKey);


const sendWelcomeEmail= (email,name)=>{
    sgMail.send({
        to:email,
        from:'rohitdas10595@gmail.com',
        subject:'Thanks for joining In',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app`,
    
    })

}
const sendDeleteEmail= (email,name)=>{
    sgMail.send({
        to:email,
        from:'rohitdas10595@gmail.com',
        subject:'Sorry to see you go!',
        text: `Good Bye!, ${name}. Write to us know how you felt about the app. It helps us to improve our services.`,
    })

}

module.exports={
    sendWelcomeEmail,
    sendDeleteEmail
}