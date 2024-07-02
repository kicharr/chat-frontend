export interface DialoguesListType {

}

export interface SeparateDialogueType {
    name: string
    lastMessage?: string
}

export interface UserRegistrationDataType {
    login: string
    name: string
    password: string
    repeatPassword?: string
}

export interface UserAuthorizationType {
    login: string
    password: string
}