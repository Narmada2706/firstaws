const enrollment = require("../model/Enrollment_model")
const nodemailer = require("nodemailer")
exports.sendEmailForEnrollment =async (req,res)=>{
try {
    const result = await enrollment.aggregate([ {
        $lookup:{
            from:"courses",
            localField:"CourseId",
            foreignField:"CourseId",
            as:"Course"
        },
    },
    {
        $lookup:{
            from:"users",
            localField:"UserId",
            foreignField:"UserId",
            as:"User"
        },
     
    },
{
    $match:{"User.Email":"narwadegovind1@gmail.com"}
}])
console.log(result[0].User[0].Email)
//     var  transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user:"icaet20@nmiet.edu.in",
//           pass:"Bonybaba125@",
//         },
//       }); 
//       var mailOption = {
//         from:"icaet20@nmiet.edu.in",
//         to :"narwadegovind1@gmail.com",
//         subject :"Enrollment for EnglishGuru",
//         html:`
//         <!DOCTYPE html>

// <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
// <head>
// <title></title>
// <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
// <style>
// 		* {
// 			box-sizing: border-box;
// 		}

// 		body {
// 			margin: 0;
// 			padding: 0;
// 		}

// 		a[x-apple-data-detectors] {
// 			color: inherit !important;
// 			text-decoration: inherit !important;
// 		}

// 		#MessageViewBody a {
// 			color: inherit;
// 			text-decoration: none;
// 		}

// 		p {
// 			line-height: inherit
// 		}

// 		.desktop_hide,
// 		.desktop_hide table {
// 			mso-hide: all;
// 			display: none;
// 			max-height: 0px;
// 			overflow: hidden;
// 		}

// 		@media (max-width:620px) {

// 			.desktop_hide table.icons-inner,
// 			.social_block.desktop_hide .social-table {
// 				display: inline-block !important;
// 			}

// 			.icons-inner {
// 				text-align: center;
// 			}

// 			.icons-inner td {
// 				margin: 0 auto;
// 			}

// 			.fullMobileWidth,
// 			.image_block img.big,
// 			.row-content {
// 				width: 100% !important;
// 			}

// 			.mobile_hide {
// 				display: none;
// 			}

// 			.stack .column {
// 				width: 100%;
// 				display: block;
// 			}

// 			.mobile_hide {
// 				min-height: 0;
// 				max-height: 0;
// 				max-width: 0;
// 				overflow: hidden;
// 				font-size: 0px;
// 			}

// 			.desktop_hide,
// 			.desktop_hide table {
// 				display: table !important;
// 				max-height: none !important;
// 			}
// 		}
// 	</style>
// </head>
// <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
// <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #132437;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-repeat: no-repeat; background-position: center top; color: #000000; background-image: url('images/blue-glow_3.jpg'); width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:35px;padding-left:30px;padding-right:30px;padding-top:35px;width:100%;">
// <div align="center" class="alignment" style="line-height:10px"><img alt="Books Plus" src="images/images.png" style="display: block; height: auto; border: 0; width: 150px; max-width: 100%;" title="Books Plus" width="150"/></div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px"><img class="fullMobileWidth" src="images/top-rounded.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" width="600"/></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #132437;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top; color: #000000; width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:20px;padding-top:5px;width:100%;">
// <div align="center" class="alignment" style="line-height:10px"><img alt="book shelf" class="big" src="images/online-g7c8f8b8b0_1280.png" style="display: block; height: auto; border: 0; width: 560px; max-width: 100%;" title="book shelf" width="560"/></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff7d14; background-image: url('images/orange-gradient-wide.png'); background-repeat: no-repeat;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; border-radius: 0; width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:5px;padding-top:25px;text-align:center;width:100%;">
// <h1 style="margin: 0; color: #555555; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 36px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Welcome to English Guru For All</strong></h1>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:20px;">
// <div style="font-family: sans-serif">
// <div class="" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #737487; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
// <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;">You have successfully confirmed your subscription. You now have unlimited access to our courses. You can now sign into your account to start learning .</span></p>
// <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.2px;"> </p>
// </div>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="button_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="text-align:center;">
// <div align="center" class="alignment">
// <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:152px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#ff7d14"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
// <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#ff7d14;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>Course Details</strong></span></span></div>
// <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#101112;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
// <p style="margin: 0; margin-bottom: 16px;"><strong>Course Name : ${result[0].Course[0].CourseName}</strong></p>
// <p style="margin: 0; margin-bottom: 16px;"><strong>Course Duration: ${result[0].Course[0].CourseDuration} </strong></p>
// <p style="margin: 0; margin-bottom: 16px;"><strong>Course Category: </strong></p>
// <p style="margin: 0; margin-bottom: 16px;"><strong>Course Sub-Category:</strong></p>
// <p style="margin: 0; margin-bottom: 16px;"><strong>Course Price: </strong></p>
// <p style="margin: 0; margin-bottom: 16px;"><strong>No .of Lesson: </strong></p>
// <p style="margin: 0;"><strong>Author Name:${result[0].Course[0].AuthorName} </strong></p>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="button_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:30px;padding-left:15px;padding-right:15px;padding-top:20px;text-align:center;">
// <div align="center" class="alignment">
// <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.example.com" style="height:52px;width:197px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#ff7d14"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="https://www.example.com" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#ff7d14;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:60px;padding-right:60px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Learn Now</span></span></a>
// <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:40px;width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px"><img alt="line" class="big" src="images/divider.png" style="display: block; height: auto; border: 0; width: 541px; max-width: 100%;" title="line" width="541"/></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff7d14;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px"><img alt="audio book" src="../controller/images/book-app.png" style="display: block; height: auto; border: 0; width: 195px; max-width: 100%;" title="audio book" width="195"/></div>
// </td>
// </tr>
// </table>
// </td>
// <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:80px;padding-left:40px;padding-right:40px;padding-top:40px;width:100%;">
// <div align="center" class="alignment" style="line-height:10px"><img alt="book icon" src="images/book-unlimited.gif" style="display: block; height: auto; border: 0; width: 110px; max-width: 100%;" title="book icon" width="110"/></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff7d14;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:5px;padding-top:25px;text-align:center;width:100%;">
// <h2 style="margin: 0; color: #555555; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 24px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Learn Anytime .....</strong></h2>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:20px;">
// <div style="font-family: sans-serif">
// <div class="" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #737487; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
// <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;">You now get unlimited access to take all your courses  </span></p>
// </div>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:35px;padding-top:10px;width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px"><img class="big" src="images/divider.png" style="display: block; height: auto; border: 0; width: 541px; max-width: 100%;" width="541"/></div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="font-family: sans-serif">
// <div class="" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #07113e; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
// <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;">Follow us</span></p>
// </div>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:15px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:center;">
// <div align="center" class="alignment">
// <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="138px">
// <tr>
// <td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
// <td style="padding:0 7px 0 7px;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
// <td style="padding:0 7px 0 7px;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
// </tr>
// </table>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff7d14;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; color: #000000; width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px"><img class="fullMobileWidth" src="images/bottom-rounded.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" width="600"/></div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:30px;">
// <div style="font-family: sans-serif">
// <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #262b30; line-height: 1.2;">
// <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:12px;">© 2023 English Guru For All  | Pune</span></p>
// </div>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad" style="padding-bottom:35px;padding-left:10px;padding-right:10px;padding-top:5px;">
// <div style="font-family: sans-serif">
// <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #262b30; line-height: 1.2;">
// <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:12px;">If you prefer not to receive marketing emails form this list, <a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #262b30;" target="_blank">click here to unsubscribe</a>.</span></p>
// </div>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
// <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="alignment" style="vertical-align: middle; text-align: center;">
// <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
// <!--[if !vml]><!-->
// <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
// <!--<![endif]-->
// <tr>
// <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="images/bee.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
// <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
// </tr>
// </table>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table><!-- End -->
// </body>
// </html> `
//     }
//         transporter.sendMail(mailOption, error => {
//             error
//             ? console.log(`EMAIL NOT SEND ${error}`)
//             : console.log("EMAIL SEND");
//         });
        res.end(result[0].User[0].Email)
} catch (error) {
    console.log(error);
}
}
