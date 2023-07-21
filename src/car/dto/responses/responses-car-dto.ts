import { ApiProperty } from "@nestjs/swagger"

export class SuccessResponseCar {
    @ApiProperty()
    id: number
    @ApiProperty()
    name: string
    @ApiProperty()
    model: string
    @ApiProperty()
    status: boolean
}