import React, { useMemo, forwardRef } from 'react';
import {
  useNavigate,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Tab from '@mui/material/Tab';

/**
 * Link Tab Props
 */
interface LinkTabProps {
  label: string;
  href: string;
}

/**
 * Link Tab
 */
export const LinkTab = ({ label, href, ...props }: LinkTabProps) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      label={label}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(href);
      }}
      {...props}
    />
  );
};

/**
 * Router Link Tab Props
 */
interface RouterLinkTabProps {
  label: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

/**
 * React Router Link Tab
 */
export const RouterLinkTab = ({ label, to, onClick }: RouterLinkTabProps) => {
  const renderLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
        itemProps,
        ref
      ) {
        return (
          <RouterLink
            to={to}
            ref={ref}
            {...itemProps}
            role={undefined}
            onClick={onClick}
          />
        );
      }),
    [to, onClick]
  );

  return <Tab component={renderLink} label={label} />;
};
