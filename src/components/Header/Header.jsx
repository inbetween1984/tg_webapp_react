import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {

    const {user, onClose} = useTelegram();

    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрыть</Button>
            {user ? (
                <span className={'username'}>
                    {user.username}
                </span>
            ) : (
                <span className={'username'}>
                    Пользователь не найден
                </span>
            )}
        </div>
    );
};

export default Header;