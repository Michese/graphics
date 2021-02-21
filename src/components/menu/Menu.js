import styles from "./menu.module.scss";
import React from "react";
import onClickCopy from "./copy";

const Menu = props => {

    return (
        <div className={styles.hidden}>
            <div className={styles.menu}>
                <div className={styles.menu__body}>
                    <div className={styles.block__add}>
                        <input className="form-control" type="text" name="title" placeholder={"Название"}/>
                        <input className="form-control mt-2" type="number" name="height" placeholder={"Высота"}/>
                        <input className="btn btn-primary mt-2 align-self-end" type="button" value="Добавить" onClick={props.onAdd}/>
                    </div>
                    <div className="p-1 overflow-auto d-flex flex-column align-items-center">
                        {
                            props.figures.map((figure, index) => (
                                <fieldset id={index} key={`figureField${index}`} className="d-flex justify-content-around mt-1 ">
                                    <input className="form-control col-4" type="text" name="title" placeholder={"Название"} value={figure.title} onChange={props.onChange}/>
                                    <input className="form-control col-4" type="number" name="height" placeholder={"Высота"} value={figure.height} onChange={props.onChange}/>
                                    <input className="btn btn-danger align-self-end" type="button" value="Х" onClick={props.onRemove}/>
                                </fieldset>
                            ))
                        }

                    </div>

                    <input className="btn btn-info mt-2 mb-2 align-self-center" type="button" value="Копировать" onClick={onClickCopy}/>
                </div>
            </div>
        </div>
    )
}

export default Menu