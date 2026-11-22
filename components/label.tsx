

const labelProps = {
    contentLabel: '',
    colorLabel: '',
}

export function Label(props: typeof labelProps) {
    return (
        <div className={`w-fit rounded-sm items-center px-2 text-[0.580rem] font-medium ${props.colorLabel}`}>
            {props.contentLabel}
        </div>
    )
}