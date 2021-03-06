// Generated by https://quicktype.io

export interface Search {
  site_id: SiteID;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: null | string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

export interface FilterValue {
  id: CategoryID;
  name: string;
  path_from_root: Sort[];
}

export enum CategoryID {
  Mla65816 = 'MLA65816',
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Result {
  id: string;
  site_id: SiteID;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price: null;
  currency_id: CurrencyID;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: BuyingMode;
  listing_type_id: ListingTypeID;
  stop_time: string;
  condition: Condition;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price: number | null;
  category_id: CategoryID;
  official_store_id: number | null;
  domain_id: DomainID;
  catalog_product_id: null;
  tags: ResultTag[];
  order_backend: number;
  use_thumbnail_id: boolean;
  offer_score: null;
  offer_share: null;
  match_score: null;
  winner_item_id: null;
  melicoin: null;
  differential_pricing?: DifferentialPricing;
}

export interface Address {
  state_id: StateID;
  state_name: StateName;
  city_id: null | string;
  city_name: string;
}

export enum StateID {
  ArB = 'AR-B',
  ArC = 'AR-C',
  ArS = 'AR-S',
}

export enum StateName {
  BuenosAires = 'Buenos Aires',
  CapitalFederal = 'Capital Federal',
  SantaFe = 'Santa Fe',
}

export interface Attribute {
  attribute_group_name: AttributeGroupName;
  name: Name;
  value_name: null | string;
  value_struct: Struct | null;
  attribute_group_id: AttributeGroupID;
  source: number | null;
  id: ID;
  value_id: null | string;
  values: AttributeValue[];
}

export enum AttributeGroupID {
  Others = 'OTHERS',
}

export enum AttributeGroupName {
  Otros = 'Otros',
}

export enum ID {
  BarLength = 'BAR_LENGTH',
  Brand = 'BRAND',
  ItemCondition = 'ITEM_CONDITION',
  Model = 'MODEL',
  PackageLength = 'PACKAGE_LENGTH',
  PackageWeight = 'PACKAGE_WEIGHT',
  Weight = 'WEIGHT',
}

export enum Name {
  Condici??nDel??tem = 'Condici??n del ??tem',
  Largo = 'Largo',
  LargoDelPaquete = 'Largo del paquete',
  Marca = 'Marca',
  Modelo = 'Modelo',
  Peso = 'Peso',
  PesoDelPaquete = 'Peso del paquete',
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = 'cm',
  G = 'g',
  Kg = 'kg',
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number | null;
}

export enum BuyingMode {
  BuyItNow = 'buy_it_now',
}

export enum Condition {
  New = 'new',
}

export enum CurrencyID {
  Ars = 'ARS',
}

export interface DifferentialPricing {
  id: number;
}

export enum DomainID {
  MlaGymDumbbells = 'MLA-GYM_DUMBBELLS',
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = 'gold_pro',
  GoldSpecial = 'gold_special',
}

export interface Prices {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: Price[];
  purchase_discounts: any[];
}

export interface Presentation {
  display_currency: CurrencyID;
}

export interface Price {
  id: string;
  type: Type;
  amount: number;
  regular_amount?: number | null;
  currency_id: CurrencyID;
  last_updated: string;
  conditions: Conditions;
  exchange_rate_context: ExchangeRateContext;
  metadata?: Metadata;
  tags?: any[];
}

export interface Conditions {
  context_restrictions: ContextRestriction[];
  start_time: null | string;
  end_time: null | string;
  eligible: boolean;
}

export enum ContextRestriction {
  ChannelMarketplace = 'channel_marketplace',
  ChannelMshops = 'channel_mshops',
}

export enum ExchangeRateContext {
  Default = 'DEFAULT',
}

export interface Metadata {
  promotion_id?: string;
  promotion_type?: PromotionType;
  campaign_id?: string;
  discount_meli_amount?: number;
  campaign_discount_percentage?: number;
  campaign_end_date?: string;
  order_item_price?: number;
}

export enum PromotionType {
  Campaign = 'campaign',
  Custom = 'custom',
  DealOfTheDay = 'deal_of_the_day',
  Lightning = 'lightning',
  MarketplaceCampaign = 'marketplace_campaign',
}

export enum Type {
  MinStandard = 'min_standard',
  Promotion = 'promotion',
  Standard = 'standard',
  Was = 'was',
}

export interface Seller {
  id: number;
  permalink: string;
  registration_date: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: SellerTag[];
  eshop?: Eshop;
  seller_reputation: SellerReputation;
}

export interface Eshop {
  seller: number;
  eshop_rubro: EshopRubro | null;
  eshop_id: number;
  nick_name: string;
  site_id: SiteID;
  eshop_logo_url: string;
  eshop_status_id: number;
  eshop_experience: number;
  eshop_locations: EshopLocation[];
}

export interface EshopLocation {
  country: City;
  city: City;
  neighborhood: City;
  state: City;
}

export interface City {
  id: null | string;
}

export interface EshopRubro {
  category_id: string;
  name: string;
  id: string;
}

export enum SiteID {
  Mla = 'MLA',
}

export interface SellerReputation {
  power_seller_status: PowerSellerStatus;
  level_id: LevelID;
  metrics: Metrics;
  transactions: Transactions;
  real_level?: string;
  protection_end_date?: string;
}

export enum LevelID {
  The5_Green = '5_green',
}

export interface Metrics {
  cancellations: Cancellations;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  sales: Sales;
}

export interface Cancellations {
  period: CancellationsPeriod;
  rate: number;
  value: number;
  excluded?: Excluded;
}

export interface Excluded {
  real_value: number;
  real_rate: number;
}

export enum CancellationsPeriod {
  The60Days = '60 days',
}

export interface Sales {
  period: CancellationsPeriod;
  completed: number;
}

export enum PowerSellerStatus {
  Gold = 'gold',
  Platinum = 'platinum',
}

export interface Transactions {
  canceled: number;
  period: TransactionsPeriod;
  total: number;
  ratings: Ratings;
  completed: number;
}

export enum TransactionsPeriod {
  Historic = 'historic',
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export enum SellerTag {
  Brand = 'brand',
  CreditsPriority4 = 'credits_priority_4',
  CreditsProfile = 'credits_profile',
  Eshop = 'eshop',
  LargeSeller = 'large_seller',
  MediumSeller = 'medium_seller',
  MessagesAsSeller = 'messages_as_seller',
  Mshops = 'mshops',
  Normal = 'normal',
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Sort;
  state: Sort;
  city: Sort;
  latitude: string;
  longitude: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode: Mode;
  tags: ShippingTag[];
  logistic_type: LogisticType;
  store_pick_up: boolean;
}

export enum LogisticType {
  CrossDocking = 'cross_docking',
  DropOff = 'drop_off',
  Fulfillment = 'fulfillment',
  XdDropOff = 'xd_drop_off',
}

export enum Mode {
  Me2 = 'me2',
}

export enum ShippingTag {
  FSRemovedByTagger = 'fs_removed_by_tagger',
  FSThresholdMlaChangeFeb2021 = 'fs_threshold_mla_change_feb2021',
  Fulfillment = 'fulfillment',
  MandatoryFreeShipping = 'mandatory_free_shipping',
  SelfServiceIn = 'self_service_in',
  SelfServiceOut = 'self_service_out',
}

export enum ResultTag {
  Ahora12 = 'ahora-12',
  BestSellerCandidate = 'best_seller_candidate',
  BrandVerified = 'brand_verified',
  CartEligible = 'cart_eligible',
  DealOfTheDay = 'deal_of_the_day',
  DraggedBidsAndVisits = 'dragged_bids_and_visits',
  GoodQualityPicture = 'good_quality_picture',
  GoodQualityThumbnail = 'good_quality_thumbnail',
  ImmediatePayment = 'immediate_payment',
  LightningDeal = 'lightning_deal',
  LoyaltyDiscountEligible = 'loyalty_discount_eligible',
  ShippingGuaranteed = 'shipping_guaranteed',
  StandardPriceByChannel = 'standard_price_by_channel',
}
