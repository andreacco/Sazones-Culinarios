import '../../../scss/components/ProductDetail/components/Separator.scss'

export default function Separator({texto}: any) {
    return (
        <div className='separator-container'>
            <p className='separator-text'>
                {texto}
            </p>
        </div>
    )
}
