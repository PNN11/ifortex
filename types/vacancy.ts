export interface Vacancy {
    accept_handicapped: boolean
    accept_incomplete_resumes: boolean
    accept_kids: boolean
    accept_temporary: boolean
    address: Address
    allow_messages: boolean
    alternate_url: string
    apply_alternate_url: string
    approved: boolean
    archived: boolean
    area: Area
    billing_type: BillingType
    branded_description: string
    branded_template: BrandedTemplate
    can_upgrade_billing_type: boolean
    code: string
    contacts: Contacts
    created_at: string
    department: Department
    description: string
    driver_license_types: DriverLicenseType[]
    employer: Employer
    employment: Employment
    experience: Experience
    expires_at: string
    has_test: boolean
    hidden: boolean
    id: string
    initial_created_at: string
    insider_interview: InsiderInterview
    key_skills: KeySkill[]
    languages: Language[]
    manager: Manager
    name: string
    premium: boolean
    previous_id: string
    professional_roles: ProfessionalRole[]
    published_at: string
    response_letter_required: boolean
    response_notifications: boolean
    response_url: any
    salary: Salary
    schedule: Schedule
    test: Test
    type: Type
    video_vacancy: VideoVacancy
    working_days: WorkingDay[]
    working_time_intervals: WorkingTimeInterval[]
    working_time_modes: WorkingTimeMode[]
}

interface Address {
    building: string
    city: string
    description: string
    lat: number
    lng: number
    metro_stations: MetroStation[]
    street: string
}

interface MetroStation {
    lat: number
    line_id: string
    line_name: string
    lng: number
    station_id: string
    station_name: string
}

interface Area {
    id: string
    name: string
    url: string
}

interface BillingType {
    id: string
    name: string
}

interface BrandedTemplate {
    id: string
    name: string
}

interface Contacts {
    email: string
    name: string
    phones: Phone[]
}

interface Phone {
    city: string
    comment: any
    country: string
    number: string
}

interface Department {
    id: string
    name: string
}

interface DriverLicenseType {
    id: string
}

interface Employer {
    alternate_url: string
    blacklisted: boolean
    id: string
    logo_urls: LogoUrls
    name: string
    trusted: boolean
    url: string
}

interface LogoUrls {
    '90': string
    '240': string
    original: string
}

interface Employment {
    id: string
    name: string
}

interface Experience {
    id: string
    name: string
}

interface InsiderInterview {
    id: string
    url: string
}

interface KeySkill {
    name: string
}

interface Language {
    id: string
    level: Level
    name: string
}

interface Level {
    id: string
    name: string
}

interface Manager {
    id: string
}

interface ProfessionalRole {
    id: string
    name: string
}

interface Salary {
    currency: string
    from: number
    gross: boolean
    to: any
}

interface Schedule {
    id: string
    name: string
}

interface Test {
    required: boolean
}

interface Type {
    id: string
    name: string
}

interface VideoVacancy {
    cover_picture: CoverPicture
    video_url: string
}

interface CoverPicture {
    resized_height: number
    resized_path: string
    resized_width: number
}

interface WorkingDay {
    id: string
    name: string
}

interface WorkingTimeInterval {
    id: string
    name: string
}

interface WorkingTimeMode {
    id: string
    name: string
}

export interface VacanciesResponse {
    items: Vacancy[]
    found: number
    pages: number
    page: number
    per_page: number
    clusters: unknown
    arguments: unknown
    fixes: unknown
    suggests: unknown
    alternate_url: string
}
