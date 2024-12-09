import * as React from 'react';

export interface TextProps {
    size: 'small' | 'medium' | 'large';
    content: string;
    strong?: boolean;
};

export const Text = (props: TextProps) => {
    const textStyles: React.CSSProperties = {
        fontSize: props.size === 'small' ? '12px' : props.size === 'medium' ? '16px' : '24px',
        fontWeight: props.strong ? 'bold' : 'normal'
    }
    return (<div style={textStyles}>{props.content}</div>);
};

