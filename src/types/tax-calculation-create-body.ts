import {
  External$TaxCalculationCreateBodyCustomerDetails,
  Schemas$TaxCalculationCreateBodyCustomerDetails,
  TaxCalculationCreateBodyCustomerDetails,
} from "./tax-calculation-create-body-customer-details";
import {
  External$TaxCalculationCreateBodyLineItemsItem,
  Schemas$TaxCalculationCreateBodyLineItemsItem,
  TaxCalculationCreateBodyLineItemsItem,
} from "./tax-calculation-create-body-line-items-item";
import {
  External$TaxCalculationCreateBodyShipFromDetails,
  Schemas$TaxCalculationCreateBodyShipFromDetails,
  TaxCalculationCreateBodyShipFromDetails,
} from "./tax-calculation-create-body-ship-from-details";
import {
  External$TaxCalculationCreateBodyShippingCost,
  Schemas$TaxCalculationCreateBodyShippingCost,
  TaxCalculationCreateBodyShippingCost,
} from "./tax-calculation-create-body-shipping-cost";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxCalculationCreateBody
 */
export type TaxCalculationCreateBody = {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of an existing customer to use for this calculation. If provided, the customer's address and tax IDs are copied to `customer_details`.
   */
  customer?: string | undefined;
  /**
   * Details about the customer, including address and tax IDs.
   */
  customerDetails?: TaxCalculationCreateBodyCustomerDetails | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A list of items the customer is purchasing.
   */
  lineItems: TaxCalculationCreateBodyLineItemsItem[];
  /**
   * Details about the address from which the goods are being shipped.
   */
  shipFromDetails?: TaxCalculationCreateBodyShipFromDetails | undefined;
  /**
   * Shipping cost details to be used for the calculation.
   */
  shippingCost?: TaxCalculationCreateBodyShippingCost | undefined;
  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation. Measured in seconds since the Unix epoch. Can be up to 48 hours in the past, and up to 48 hours in the future.
   */
  taxDate?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (string | undefined)
    | (TaxCalculationCreateBodyCustomerDetails | undefined)
    | (string[] | undefined)
    | TaxCalculationCreateBodyLineItemsItem[]
    | (TaxCalculationCreateBodyShipFromDetails | undefined)
    | (TaxCalculationCreateBodyShippingCost | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxCalculationCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationCreateBody = {
  currency: string;
  customer?: string | undefined;
  customer_details?:
    | External$TaxCalculationCreateBodyCustomerDetails
    | undefined;
  expand?: string[] | undefined;
  line_items: External$TaxCalculationCreateBodyLineItemsItem[];
  ship_from_details?:
    | External$TaxCalculationCreateBodyShipFromDetails
    | undefined;
  shipping_cost?: External$TaxCalculationCreateBodyShippingCost | undefined;
  tax_date?: number | undefined;

  [additionalProperty: string]:
    | string
    | (string | undefined)
    | (External$TaxCalculationCreateBodyCustomerDetails | undefined)
    | (string[] | undefined)
    | External$TaxCalculationCreateBodyLineItemsItem[]
    | (External$TaxCalculationCreateBodyShipFromDetails | undefined)
    | (External$TaxCalculationCreateBodyShippingCost | undefined)
    | (number | undefined)
    | External$TaxCalculationCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationCreateBody
 */
const SchemaIn$TaxCalculationCreateBody: z.ZodType<
  TaxCalculationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    customer: z.string().optional(),
    customer_details:
      Schemas$TaxCalculationCreateBodyCustomerDetails.in.optional(),
    expand: z.array(z.string()).optional(),
    line_items: z.array(Schemas$TaxCalculationCreateBodyLineItemsItem.in),
    ship_from_details:
      Schemas$TaxCalculationCreateBodyShipFromDetails.in.optional(),
    shipping_cost: Schemas$TaxCalculationCreateBodyShippingCost.in.optional(),
    tax_date: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      customer: "customer",
      customer_details: "customerDetails",
      expand: "expand",
      line_items: "lineItems",
      ship_from_details: "shipFromDetails",
      shipping_cost: "shippingCost",
      tax_date: "taxDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationCreateBody
 */
const SchemaOut$TaxCalculationCreateBody: z.ZodType<
  External$TaxCalculationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationCreateBody // the object to be transformed
> = z
  .object({
    currency: z.string(),
    customer: z.string().optional(),
    customerDetails:
      Schemas$TaxCalculationCreateBodyCustomerDetails.out.optional(),
    expand: z.array(z.string()).optional(),
    lineItems: z.array(Schemas$TaxCalculationCreateBodyLineItemsItem.out),
    shipFromDetails:
      Schemas$TaxCalculationCreateBodyShipFromDetails.out.optional(),
    shippingCost: Schemas$TaxCalculationCreateBodyShippingCost.out.optional(),
    taxDate: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      customer: "customer",
      customerDetails: "customer_details",
      expand: "expand",
      lineItems: "line_items",
      shipFromDetails: "ship_from_details",
      shippingCost: "shipping_cost",
      taxDate: "tax_date",
    });
  });

export const Schemas$TaxCalculationCreateBody = {
  in: SchemaIn$TaxCalculationCreateBody,
  out: SchemaOut$TaxCalculationCreateBody,
};
