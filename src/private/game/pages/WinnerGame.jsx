import tbsLogo from '/assets/logos/tbs_logo.svg';
import './WinnerGame.css';

export const WinnerGame = () => {
    return (
        <section class="gameWinner">
            <img id="logo" src={tbsLogo} alt="logo"/>
                <div class="gameWinner-container">
                    <h1>¡Felicitaciones ganador!</h1>
                    <div>
                        <img src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/265699950_2429042827231326_2404358894235837130_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5t13OtOMvnoRo2Vj3MRZVfLOfLn9sgK98s58uf2yAr1biaqeh4GxEx2WNMOILwBEMgqjeBlfrjyUQozvbNXvT&_nc_ohc=fS-yRjloX-kAX9MGcfJ&_nc_ht=scontent.fuio1-1.fna&oh=00_AfDcl3PC3BlV2NLCvS4RXDZuzJQxs0gV-oPTRPQYd7Id8g&oe=63C4C135" alt="winner"/>
                    </div>
                    <h1>Arthur Chavez</h1>
                </div>
        </section>
    )
}
