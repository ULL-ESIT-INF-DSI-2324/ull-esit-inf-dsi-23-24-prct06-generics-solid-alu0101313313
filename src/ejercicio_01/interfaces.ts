type state = 'nuevo' | 'usado' | 'roto';

/**
 * @interface itemsProperties is an interface that defines the
 * minimum parameters that has every object, in their classes.
 */
export interface itemsProperties {
    id_: number
    name_: string;
    state_: state;
    amount_: number;
    description_: string;
}


