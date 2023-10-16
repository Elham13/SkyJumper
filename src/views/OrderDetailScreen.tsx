import React, {useState} from 'react';
import {
  Icon,
  IconElement,
  Menu,
  MenuGroup,
  MenuItem,
} from '@ui-kitten/components';
import {
  StyleButton,
  StyleScrollView,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import {useAppInfo} from '../contexts/AppInfoProvider';
import {Divider} from '@ui-kitten/components';
import Collapsible from '../components/Cards/Collapsable';
import SelectedActivityDetail from '../components/Activity/SelectedActivityDetail';

const SmartphoneIcon = (props: any): IconElement => (
  <Icon {...props} name="smartphone-outline" />
);

const BrowserIcon = (props: any): IconElement => (
  <Icon {...props} name="browser-outline" />
);

const ColorPaletteIcon = (props: any): IconElement => (
  <Icon {...props} name="color-palette-outline" />
);

const StarIcon = (props: any): IconElement => <Icon {...props} name="star" />;

const OrderDetailScreen = () => {
  const {appInfo} = useAppInfo();

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <StyleView className="flex-1">
      <PageHeader title="Order Detail" />
      <StyleScrollView className="p-4">
        <StyleView className="flex-row items-center justify-between py-2">
          <StyleText category="label" className="text-lg">
            Selected Park
          </StyleText>
          <StyleText category="p1" className="text-lg">
            {appInfo.selectedScreen}
          </StyleText>
        </StyleView>
        <Divider />
        {appInfo.activities.map((activity, index) => (
          <Collapsible
            key={index}
            defaultOpen={index === 0}
            title={activity.title}
            content={<SelectedActivityDetail activity={activity} />}
          />
        ))}

        <StyleButton className="mt-8">
          <StyleText>Checkout</StyleText>
        </StyleButton>
      </StyleScrollView>
    </StyleView>
  );
};

export default OrderDetailScreen;
