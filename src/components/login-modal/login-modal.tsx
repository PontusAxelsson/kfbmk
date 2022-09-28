export const LoginModal = () => {
    return (
        <div>
            <div>
                <div>Logga in med Email</div>
                <form action="login()">
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder="E-postadress"/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" name="password" placeholder="Lösenord"/>
                    </label>
                    <button>Logga in</button>
                </form>
            </div>
            <div className='googleButton' />
        </div>
    )
}
