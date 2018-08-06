import React from "react";
import axios from "axios";
import PreviewText from "./emailcomponents/PreviewText"
import TwoColumn from "./emailcomponents/TwoColumn"
import ThreeColumn from "./emailcomponents/ThreeColumn"
import Button from "./emailcomponents/Button"
import { Box, Email, Item, Span, A, renderEmail, Td, Tr, Image } from 'react-html-email'
import Headcss from "./emailcomponents/Headcss"
import HeaderExtra from "./emailcomponents/HeaderExtra"
import BodyTop from "./emailcomponents/BodyTop"
import ConditionalOpen from "./emailcomponents/ConditionalOpen"
import ConditionalClose from "./emailcomponents/ConditionalClose"
import CommentOpen from "./emailcomponents/CommentOpen"
import CommentClose from "./emailcomponents/CommentClose"
import Border from "./emailcomponents/Border"

const accessToken =	"e51266821001c524bf56280a483b8f37b9003c2da39b044e27ce2955fb15cd0c";
const spaceId = "raisos7rtptw";
const entryId = "5h825UTWacgaIqwGcEgqoU";

export const emailRender = async () => {
	console.info("emailRender: ");

	const { data: { fields: { header } } } = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries/${entryId}?access_token=${accessToken}`)
	const cta1 = {href:'https://www.google.com',}
	const item1 = {align:'center'}
	const image1 = {alt:'tribal flowers', src:'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_1280.jpg'}
	const css=`
		@media only screen and (max-device-width: 480px) {
			font-size: 20px !important;
		}
		`.trim();

	const footer='{Footer}'
	const previewtext='New Preview Text'


	const emailHtml = renderEmail(
		<Email headCSS={css} headerextra={HeaderExtra()} bodybgcolor='#ffffff' bodytop={BodyTop(previewtext)} conditionalOpen={ConditionalOpen("mso",600)} conditionalClose={ConditionalClose('mso')} bgimage='#ffffff' bgcolor='#F9F7F6' style={{}}
			title="Hello, Email!">
			<div style={{width:'100%'}}>
				<Box bgcolor='#F9F7F6' style={{'borderCollapse':'collapse', fontSize:0, 'msoTableLspace':'0pt', 'msoTableRspace':'0pt', width:'100%'}}>
					<Tr>
						<Td style={{'paddingTop':'30px', 'paddingBottom':'30px'}}>
							{/*<Span>{header}</Span>
							<br/>
							<Span>This is an example email</Span>
							<br/>*/}
							<A href="https://www.dollarshaveclub.com/home" title='crest'>
								<Image alt="Dollar Shave Club Crest" src="http://email.assets.dollarshaveclub.com.s3.amazonaws.com/base/header/crest-2016.png" height="45"/>
							</A>
						</Td>
					</Tr>
					<Tr>
						<Td maxWidth="420" width="420" style={{maxWidth:'420px', width:'420px'}}>
							<A href='https://www.dollarshaveclub.com/home' >
								<Image alt="Handsome Discount" src="http://eroi-s3.s3.amazonaws.com/emailassets/clients/dollarshaveclub/2018/Batch_Migration_Onboarding-Handsome_Discount/Meet_the_Handsome.png" style={{width:'80%', maxWidth:'350px', margin:'0 auto'}} width='350'/>
							</A>
						</Td>
					</Tr>
					<Item>
						<A href='https://dollarshaveclub.com/home' title='home'>
							<Image alt='DSC Full Service' src='https://trello-attachments.s3.amazonaws.com/547f9c33d294e72497d13885/5b4e5b276c8a45d478b77e96/f46862554d38fc569f26118b3255f725/HandsomeDiscount2_1.gif' width='600' style={{width:'100%', maxWidth:'600px', margin:'0 auto'}}/>
						</A>
					</Item>
				</Box>
			</div>
			<div width='100%'>
				<Box bgcolor="#F9F7F6" style={{width:'100%'}}>
					<Item style={{'paddingTop':'13px'}}>
						{ConditionalOpen('(gte mso 9)|(IE)', 500)}
						 <Box className="mobile-width-adjust"  style={{verticalAlign:'bottom', width:'86%', maxWidth:'450px', 'borderCollapse':'collapse'}}>
							 <Item>
								 <Span style={{color:'#7D7977',fontSize:'14px',lineHeight:'19px',fontFamily:'Avenir-Regular, Avenir, Helvetica,Arial'}}>
									 the more you buy, the more<br/> you save — <Span style={{fontWeight:'Bold'}}>up to 15% off </Span>everything from here on out.<br/>
									<br/>
									Never pay full price again. Unless you want to...for some weird reason.
								 </Span>
							 </Item>
							 <Item style={{paddingTop:'20px',paddingBottom:'30px'}}>
								 <a href="http://dollarshaveclub.com/home">
									 <Image alt='start saving' src='http://email.assets.dollarshaveclub.com.s3.amazonaws.com/bm2/nrp-purchaser-handsome-discount/start-saving-cta.png' width='120'/>
								 </a>
							 </Item>
						 </Box>
						{ConditionalClose('(gte mso 9)|(IE)')}
					</Item>
					<Border bgcolor='#DCD7D6'/>
				</Box>
			</div>
			<div width='100%'>
				<Box bgcolor="#F7F4F3" style={{width:'100%'}}>
					<Item style={{paddingTop:'30px'}}>
						<Span style={{fontFamily:'Avenir Next, Avenir, Helvetica,Arial,sans-serif', fontWeight:'Bold',fontSize:'16px', color:'#554740'}}>HANDSOME DISCOUNT</Span>
					</Item>
					<Item style={{paddingTop:'10px'}}>
						<Span style={{fontFamily:'Avenir Next, Avenir, Helvetica,Arial,sans-serif',fontSize:'14px', color:'#554740'}}>Here's how you unlock savings:</Span>
					</Item>

					<ThreeColumn width='500' maxWidth='500' style={{maxWidth:'190px', width:'189px', valign:'top', paddingTop:'30px'}}>
						<Box>
							<Item>
								<Image alt='5%off' src='http://eroi-s3.s3.amazonaws.com/emailassets/clients/dollarshaveclub/2018/Batch_Migration_Onboarding-Handsome_Discount/5off.png' width='100' style={{verticalAlign:'middle', width:'100px', margin:'0 auto'}}/>
							</Item>
							<Item>
								{ConditionalOpen('(gte mso 9)|(IE)', 160)}
								<Box className='mobile-width-adjust2' style={{margin:'0 auto', width:'100%', maxWidth:'141px', valign:'bottom'}}>
									<Item>
										<Span style={{color:'#7D7977', fontSize:'14px', lineHeight:'20px', fontFamily:'Avenir Next, Avenir, Helvetica,Arial,sans-serif', }}>
											2 - 3 items
										</Span>
									</Item>
								</Box>
								{ConditionalClose('(gte mso 9)|(IE)')}
							</Item>
						</Box>
						<Box>
							<Item>
								<Image alt='10%off' src='http://eroi-s3.s3.amazonaws.com/emailassets/clients/dollarshaveclub/2018/Batch_Migration_Onboarding-Handsome_Discount/10off.png' width='100' style={{verticalAlign:'middle', width:'100px', margin:'0 auto'}}/>
							</Item>
							<Item>
								{ConditionalOpen('(gte mso 9)|(IE)', 160)}
								<Box className='mobile-width-adjust2' style={{margin:'0 auto', width:'100%', maxWidth:'141px', valign:'bottom'}}>
									<Item>
										<Span style={{color:'#7D7977', fontSize:'14px', lineHeight:'20px', fontFamily:'Avenir Next, Avenir, Helvetica,Arial,sans-serif', }}>
											4 - 5 items
										</Span>
									</Item>
								</Box>
								{ConditionalClose('(gte mso 9)|(IE)')}
							</Item>
						</Box>
						<Box>
							<Item>
								<Image alt='15%off' src='http://eroi-s3.s3.amazonaws.com/emailassets/clients/dollarshaveclub/2018/Batch_Migration_Onboarding-Handsome_Discount/15off.png' width='100' style={{verticalAlign:'middle',  margin:'0 auto'}}/>
							</Item>
							<Item>
								{ConditionalOpen('(gte mso 9)|(IE)', 160)}
								<Box className='mobile-width-adjust2' style={{margin:'0 auto', width:'100%', maxWidth:'141px', valign:'bottom'}}>
									<Item>
										<Span style={{color:'#7D7977', fontSize:'14px', lineHeight:'20px', fontFamily:'Avenir Next, Avenir, Helvetica,Arial,sans-serif', }}>
											6+ items
										</Span>
									</Item>
								</Box>
								{ConditionalClose('(gte mso 9)|(IE)')}
							</Item>
						</Box>
					</ThreeColumn>

				</Box>
			</div>

			<Item>
				{footer}
			</Item>

		</Email>
	);
	return emailHtml;
};
