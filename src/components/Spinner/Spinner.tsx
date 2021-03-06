import React from 'react';
import { StyledSpinner } from './Styled';

export interface SpinnerProps {
    size?: number;
    className?: string;
    light?: boolean;
};

// const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = (props, ref) => {
//     const { className, size = 30, light = false } = props;

//     return (
//         <StyledSpinner ref={ref} className={className} size={size} light={light} />
//     )
// }

// export default React.forwardRef<HTMLDivElement, SpinnerProps>(Spinner);

const Spinner = ({
    className,
    size = 30,
    light = false
}: SpinnerProps) => {
    return (
        <StyledSpinner className={className} size={size} light={light} />
    )
}

export default Spinner;