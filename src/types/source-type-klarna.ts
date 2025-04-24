import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeKlarna
 */
export type SourceTypeKlarna = {
  backgroundImageUrl?: string | undefined;
  clientToken?: string | null | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  locale?: string | undefined;
  logoUrl?: string | undefined;
  pageTitle?: string | undefined;
  payLaterAssetUrlsDescriptive?: string | undefined;
  payLaterAssetUrlsStandard?: string | undefined;
  payLaterName?: string | undefined;
  payLaterRedirectUrl?: string | undefined;
  payNowAssetUrlsDescriptive?: string | undefined;
  payNowAssetUrlsStandard?: string | undefined;
  payNowName?: string | undefined;
  payNowRedirectUrl?: string | undefined;
  payOverTimeAssetUrlsDescriptive?: string | undefined;
  payOverTimeAssetUrlsStandard?: string | undefined;
  payOverTimeName?: string | undefined;
  payOverTimeRedirectUrl?: string | undefined;
  paymentMethodCategories?: string | undefined;
  purchaseCountry?: string | undefined;
  purchaseType?: string | undefined;
  redirectUrl?: string | undefined;
  shippingDelay?: number | undefined;
  shippingFirstName?: string | undefined;
  shippingLastName?: string | undefined;
};

/**
 * @internal
 * SourceTypeKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeKlarna = {
  background_image_url?: string | undefined;
  client_token?: string | null | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  locale?: string | undefined;
  logo_url?: string | undefined;
  page_title?: string | undefined;
  pay_later_asset_urls_descriptive?: string | undefined;
  pay_later_asset_urls_standard?: string | undefined;
  pay_later_name?: string | undefined;
  pay_later_redirect_url?: string | undefined;
  pay_now_asset_urls_descriptive?: string | undefined;
  pay_now_asset_urls_standard?: string | undefined;
  pay_now_name?: string | undefined;
  pay_now_redirect_url?: string | undefined;
  pay_over_time_asset_urls_descriptive?: string | undefined;
  pay_over_time_asset_urls_standard?: string | undefined;
  pay_over_time_name?: string | undefined;
  pay_over_time_redirect_url?: string | undefined;
  payment_method_categories?: string | undefined;
  purchase_country?: string | undefined;
  purchase_type?: string | undefined;
  redirect_url?: string | undefined;
  shipping_delay?: number | undefined;
  shipping_first_name?: string | undefined;
  shipping_last_name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeKlarna
 */
const SchemaIn$SourceTypeKlarna: z.ZodType<
  SourceTypeKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    background_image_url: z.string().optional(),
    client_token: z.string().nullable().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    locale: z.string().optional(),
    logo_url: z.string().optional(),
    page_title: z.string().optional(),
    pay_later_asset_urls_descriptive: z.string().optional(),
    pay_later_asset_urls_standard: z.string().optional(),
    pay_later_name: z.string().optional(),
    pay_later_redirect_url: z.string().optional(),
    pay_now_asset_urls_descriptive: z.string().optional(),
    pay_now_asset_urls_standard: z.string().optional(),
    pay_now_name: z.string().optional(),
    pay_now_redirect_url: z.string().optional(),
    pay_over_time_asset_urls_descriptive: z.string().optional(),
    pay_over_time_asset_urls_standard: z.string().optional(),
    pay_over_time_name: z.string().optional(),
    pay_over_time_redirect_url: z.string().optional(),
    payment_method_categories: z.string().optional(),
    purchase_country: z.string().optional(),
    purchase_type: z.string().optional(),
    redirect_url: z.string().optional(),
    shipping_delay: z.number().int().optional(),
    shipping_first_name: z.string().optional(),
    shipping_last_name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      background_image_url: "backgroundImageUrl",
      client_token: "clientToken",
      first_name: "firstName",
      last_name: "lastName",
      locale: "locale",
      logo_url: "logoUrl",
      page_title: "pageTitle",
      pay_later_asset_urls_descriptive: "payLaterAssetUrlsDescriptive",
      pay_later_asset_urls_standard: "payLaterAssetUrlsStandard",
      pay_later_name: "payLaterName",
      pay_later_redirect_url: "payLaterRedirectUrl",
      pay_now_asset_urls_descriptive: "payNowAssetUrlsDescriptive",
      pay_now_asset_urls_standard: "payNowAssetUrlsStandard",
      pay_now_name: "payNowName",
      pay_now_redirect_url: "payNowRedirectUrl",
      pay_over_time_asset_urls_descriptive: "payOverTimeAssetUrlsDescriptive",
      pay_over_time_asset_urls_standard: "payOverTimeAssetUrlsStandard",
      pay_over_time_name: "payOverTimeName",
      pay_over_time_redirect_url: "payOverTimeRedirectUrl",
      payment_method_categories: "paymentMethodCategories",
      purchase_country: "purchaseCountry",
      purchase_type: "purchaseType",
      redirect_url: "redirectUrl",
      shipping_delay: "shippingDelay",
      shipping_first_name: "shippingFirstName",
      shipping_last_name: "shippingLastName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeKlarna
 */
const SchemaOut$SourceTypeKlarna: z.ZodType<
  External$SourceTypeKlarna, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeKlarna // the object to be transformed
> = z
  .object({
    backgroundImageUrl: z.string().optional(),
    clientToken: z.string().nullable().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    locale: z.string().optional(),
    logoUrl: z.string().optional(),
    pageTitle: z.string().optional(),
    payLaterAssetUrlsDescriptive: z.string().optional(),
    payLaterAssetUrlsStandard: z.string().optional(),
    payLaterName: z.string().optional(),
    payLaterRedirectUrl: z.string().optional(),
    payNowAssetUrlsDescriptive: z.string().optional(),
    payNowAssetUrlsStandard: z.string().optional(),
    payNowName: z.string().optional(),
    payNowRedirectUrl: z.string().optional(),
    payOverTimeAssetUrlsDescriptive: z.string().optional(),
    payOverTimeAssetUrlsStandard: z.string().optional(),
    payOverTimeName: z.string().optional(),
    payOverTimeRedirectUrl: z.string().optional(),
    paymentMethodCategories: z.string().optional(),
    purchaseCountry: z.string().optional(),
    purchaseType: z.string().optional(),
    redirectUrl: z.string().optional(),
    shippingDelay: z.number().int().optional(),
    shippingFirstName: z.string().optional(),
    shippingLastName: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      backgroundImageUrl: "background_image_url",
      clientToken: "client_token",
      firstName: "first_name",
      lastName: "last_name",
      locale: "locale",
      logoUrl: "logo_url",
      pageTitle: "page_title",
      payLaterAssetUrlsDescriptive: "pay_later_asset_urls_descriptive",
      payLaterAssetUrlsStandard: "pay_later_asset_urls_standard",
      payLaterName: "pay_later_name",
      payLaterRedirectUrl: "pay_later_redirect_url",
      payNowAssetUrlsDescriptive: "pay_now_asset_urls_descriptive",
      payNowAssetUrlsStandard: "pay_now_asset_urls_standard",
      payNowName: "pay_now_name",
      payNowRedirectUrl: "pay_now_redirect_url",
      payOverTimeAssetUrlsDescriptive: "pay_over_time_asset_urls_descriptive",
      payOverTimeAssetUrlsStandard: "pay_over_time_asset_urls_standard",
      payOverTimeName: "pay_over_time_name",
      payOverTimeRedirectUrl: "pay_over_time_redirect_url",
      paymentMethodCategories: "payment_method_categories",
      purchaseCountry: "purchase_country",
      purchaseType: "purchase_type",
      redirectUrl: "redirect_url",
      shippingDelay: "shipping_delay",
      shippingFirstName: "shipping_first_name",
      shippingLastName: "shipping_last_name",
    });
  });

export const Schemas$SourceTypeKlarna = {
  in: SchemaIn$SourceTypeKlarna,
  out: SchemaOut$SourceTypeKlarna,
};
