interface IWrapperProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export const Wrapper: React.FC<IWrapperProps> = ({ children, ...rest }) => {
    return <div {...rest}>{children}</div>;
}