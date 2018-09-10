//TabIcon.js

import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = ({ focused, iconDefault, iconFocused, tintColor, size }) => {
    return (
        <Icon
            name={focused ? iconFocused : iconDefault}
            size={size}
            style={{ color: tintColor }}
        />
    );
};
TabIcon.defaultProps = {
    focused: false,
    tintColor: 'orange',
    size: 28
};

export default TabIcon;