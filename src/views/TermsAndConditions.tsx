import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {StyleText, StyleView} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import {useTheme} from '../contexts/ThemProvider';

const TermsAndConditions = () => {
  const {backgroundColor} = useTheme();

  return (
    <StyleView className="flex-1">
      <PageHeader title="Terms and Conditions" />
      <ScrollView style={styles.container}>
        <StyleText className="mb-4">
          SkyJumper is committed to ensuring that your privacy is protected.
          Should we ask you to provide certain information by which you can be
          identified when using this website then you can be assured that it
          will only be used in accordance with this privacy statement.
        </StyleText>

        <StyleText className="mb-4">
          SkyJumper reserves the right to change this policy at anytime. You
          should check this page from time to time to ensure that you are
          comfortable with any changes. This policy is effective from 1 January
          2014.
        </StyleText>

        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          What We Collect
        </StyleText>
        <StyleText category="label" className="text-base mb-2">
          We must collect the following information:
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Name
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Postal Address
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Date of Birth
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Email Address
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Phone Number
        </StyleText>
        <StyleText category="label" className="text-base my-2">
          We may also ask to collect further personal information:
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Job Title
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Demographic Information
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Preferences and Interests
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Other information relevant to
          customer surveys and/or offers
        </StyleText>

        <StyleText category="label" className="text-base my-4">
          The amount of further personal information that you choose to disclose
          to SkyJumper is completely up to you.
        </StyleText>

        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          What we do with the information we gather:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> Internal record keeping
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> To improve our products and
          services.
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> To inform via promotional emails
          about new products, special offers or other information which we think
          you may find interesting.
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> To contact you for market
          research purposes either by email or phone.
        </StyleText>
        <StyleText className="flex-row">
          <Icon name="dot-single" size={20} /> To improve or customize our
          website contents.
        </StyleText>

        <StyleText category="label" className="text-base my-4">
          You can unsubscribe from our mailing list at anytime.
        </StyleText>
        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          Credit Card details:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          We do not store credit card details nor do we share customer details
          with any third parties. Credit Card information is managed by a
          separate, authorized and compliant, credit card processor to ensure
          security of your information.
        </StyleText>

        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          Security:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorised access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          This Security Policy explains how we protect your privacy and personal
          information.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          You should be aware that there are inherent risks in transmitting
          personal information via the internet and that we accept no
          responsibility for personal information provided via unsecured
          websites. We will not be held liable for loss or damage arising from
          unauthorised access to your personal information or a breach of this
          policy whether or not such access or breach was caused by our
          negligent or willful act, or omission, or that of our employees or
          agents.
        </StyleText>
        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          How we use cookies:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          A cookie is a small file which asks permission to be placed on your
          computer’s hard drive. Once you agree, the file is added and the
          cookie helps analyse web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as
          an individual. The web application can tailor its operations to your
          needs, likes and dislikes by gathering and remembering information
          about your preferences.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          We use traffic log cookies to identify which pages are being used.
          This helps us analyse data about webpage traffic and improve our
          website in order to tailor it to customer needs. We only use this
          information for statistical analysis purposes and then the data is
          removed from the system.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          Overall, cookies help us provide you with a better website by enabling
          us to monitor which pages you find useful and which you do not. A
          cookie in no way gives us access to your computer or any information
          about you, other than the data you choose to share with us.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website
        </StyleText>
        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          Links to other websites:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over any subsequent website you visit.
          Therefore, we cannot be responsible for the protection and privacy of
          any information which you provide whilst visiting such sites and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </StyleText>
        <StyleText
          category="label"
          className="text-lg mb-2"
          style={{color: backgroundColor}}>
          Controlling your personal information:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          Whenever you are asked to fill in a form on the website, look for the
          box that you can click to indicate that you do not want the
          information to be used by anybody for direct marketing purposes.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          f you have previously agreed to us using your personal information for
          direct marketing purposes, you may change your mind at any time by
          emailing us at{' '}
          <StyleText style={{color: backgroundColor}}>
            enquiry_ggn@skyjumpertp.com.
          </StyleText>
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          We will not sell, distribute or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          You may request details of personal information which we hold about
          you. If you believe that any information we are holding is incorrect
          or incomplete, please send an update email to us at{' '}
          <StyleText style={{color: backgroundColor}}>
            enquiry_ggn@skyjumpertp.com
          </StyleText>
          . We will promptly update your information.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          This Privacy Policy sets out the policy of SkyJumper Indoor Trampoline
          Parks with respect to the way we obtain, use and disclose information
          about you through the SkyJumper website. If you have any complaints
          relating to our online policy or any other such issues, please note
          our contact information:
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          SkyJumper Sports and Amusements Pvt. Ltd.
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          GF, ILD Trade Center, Sohna Road, Gurgaon, Haryana-122018, India
        </StyleText>
        <StyleText category="label" className="text-base my-4">
          Tel.: +91 888 2288 001
        </StyleText>
        <StyleText category="label" className="text-base my-4 mb-12">
          Email:{' '}
          <StyleText style={{color: backgroundColor}}>
            enquiry_ggn@skyjumpertp.com
          </StyleText>
        </StyleText>
      </ScrollView>
    </StyleView>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
