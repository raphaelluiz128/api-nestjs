import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    model: string;
    @ApiProperty()
    status: boolean;
}