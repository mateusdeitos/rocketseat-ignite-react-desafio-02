

export const Container: React.FC = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>{children}</div>
    )
}