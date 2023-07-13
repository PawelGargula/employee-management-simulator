class Asset {
    constructor(id, name, localization, responsiblePerson) {
        this.id = id;
        this.name = name;
        this.localization = localization;
        this.responsiblePerson = responsiblePerson;
    }
}

export const assets = [
    new Asset("0000000001", "Desktop", "Nowy Sącz", "Patryk Kowalski"),
    new Asset("0000000002", "Monitor", "Nowy Sącz", "Monika Kowalska"),
    new Asset("0000000003", "Printer", "Nowy Sącz", "Marek Kowalski"),
    new Asset("0000000004", "Car", "Wrocław", "Bartłomiej Kowalski"),
    new Asset("0000000005", "Desk", "Gdańsk", "Paweł Kowalski"),
    new Asset("0000000006", "Latop", "Lublin", "Jarosław Kowalski"),
    new Asset("0000000007", "Projector", "Łódź", "Iwona Kowalska"),
    new Asset("0000000008", "Computer", "Nowy Sącz", "Jan Kowalski")
]