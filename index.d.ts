declare class MultiverseClass {
    private multiversePlugin
    private worldmanager
    private queue
    constructor()
    destroyWorld(worldName: string): Promise<{}>
    importWorld(worldName: string): Promise<any>
    cloneWorld(
        worldName: string,
        templateWorldName: string
    ): Promise<{} | undefined>
    private worldExistsOnDisk
    private getWorldPath
}
export declare const Multiverse: MultiverseClass
export {}
