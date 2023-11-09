import React, {useRef} from 'react';
import {View} from 'react-native';
import SignatureScreen, {SignatureViewRef} from 'react-native-signature-canvas';

interface Props {
  text: string;
  onOK: (signature: any) => void;
}

const Sign: React.FC<Props> = ({text, onOK}) => {
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = (signature: any) => {
    console.log(signature);
    onOK(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleEnd = () => {
    ref.current?.readSignature();
  };

  const imgWidth = 300;
  const imgHeight = 200;
  const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;

  return (
    <View style={{width: imgWidth, height: imgHeight}}>
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
        autoClear={true}
        descriptionText={text}
      />
    </View>
  );
};

export default Sign;
