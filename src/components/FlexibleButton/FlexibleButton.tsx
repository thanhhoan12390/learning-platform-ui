import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './FlexibleButton.module.scss';

const cx = classNames.bind(styles);

interface FlexibleButtonBaseProps {
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    rounded?: boolean;
    underlined?: boolean;
    hover?: boolean;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    children: ReactNode;
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: () => void;
}

type ButtonProps = FlexibleButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof FlexibleButtonBaseProps>;

type AnchorProps = FlexibleButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof FlexibleButtonBaseProps>;

type LinkButtonProps = FlexibleButtonBaseProps & Omit<LinkProps, keyof FlexibleButtonBaseProps>;

type FlexibleButtonProps = ButtonProps | AnchorProps | LinkButtonProps;

function FlexibleButton({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    underlined = false,
    hover = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}: FlexibleButtonProps) {
    let Comp: React.ElementType = 'button';
    const newProps = {
        onClick,
        ...passProps,
    };

    // Remove event listener when button is disabled
    if (disabled) {
        for (const key in newProps) {
            const typedKey = key as keyof typeof newProps;
            if (key.startsWith('on') && typeof newProps[typedKey] === 'function') {
                delete newProps[typedKey];
            }
        }
    }

    if (to) {
        Comp = Link;
        (newProps as LinkProps).to = to;
    } else if (href) {
        Comp = 'a';
        (newProps as React.AnchorHTMLAttributes<HTMLAnchorElement>).href = href;
    }

    const classes = cx('wrapper', className, {
        primary,
        outline,
        text,
        rounded,
        underlined,
        hover,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...newProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default FlexibleButton;
