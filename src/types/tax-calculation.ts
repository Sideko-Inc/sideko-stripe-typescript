import {
  External$TaxCalculationLineItems,
  Schemas$TaxCalculationLineItems,
  TaxCalculationLineItems,
} from "./tax-calculation-line-items";
import {
  External$TaxProductResourceCustomerDetails,
  Schemas$TaxProductResourceCustomerDetails,
  TaxProductResourceCustomerDetails,
} from "./tax-product-resource-customer-details";
import {
  External$TaxProductResourceShipFromDetails,
  Schemas$TaxProductResourceShipFromDetails,
  TaxProductResourceShipFromDetails,
} from "./tax-product-resource-ship-from-details";
import {
  External$TaxProductResourceTaxBreakdown,
  Schemas$TaxProductResourceTaxBreakdown,
  TaxProductResourceTaxBreakdown,
} from "./tax-product-resource-tax-breakdown";
import {
  External$TaxProductResourceTaxCalculationShippingCost,
  Schemas$TaxProductResourceTaxCalculationShippingCost,
  TaxProductResourceTaxCalculationShippingCost,
} from "./tax-product-resource-tax-calculation-shipping-cost";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Tax Calculation allows you to calculate the tax to collect from your customer.
 *
 * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom)
 */
export type TaxCalculation = {
  /**
   * Total amount after taxes in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTotal: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
   */
  customer?: string | null | undefined;
  customerDetails: TaxProductResourceCustomerDetails;
  /**
   * Timestamp of date at which the tax calculation will expire.
   */
  expiresAt?: number | null | undefined;
  /**
   * Unique identifier for the calculation.
   */
  id?: string | null | undefined;
  /**
   * The list of items the customer is purchasing.
   */
  lineItems?: TaxCalculationLineItems | null | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax.calculation";
  shipFromDetails?: TaxProductResourceShipFromDetails | undefined;
  shippingCost?: TaxProductResourceTaxCalculationShippingCost | undefined;
  /**
   * The amount of tax to be collected on top of the line item prices.
   */
  taxAmountExclusive: number;
  /**
   * The amount of tax already included in the line item prices.
   */
  taxAmountInclusive: number;
  /**
   * Breakdown of individual tax amounts that add up to the total.
   */
  taxBreakdown: TaxProductResourceTaxBreakdown[];
  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
   */
  taxDate: number;
};

/**
 * @internal
 * TaxCalculation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculation = {
  amount_total: number;
  currency: string;
  customer?: string | null | undefined;
  customer_details: External$TaxProductResourceCustomerDetails;
  expires_at?: number | null | undefined;
  id?: string | null | undefined;
  line_items?: External$TaxCalculationLineItems | null | undefined;
  livemode: boolean;
  object: "tax.calculation";
  ship_from_details?: External$TaxProductResourceShipFromDetails | undefined;
  shipping_cost?:
    | External$TaxProductResourceTaxCalculationShippingCost
    | undefined;
  tax_amount_exclusive: number;
  tax_amount_inclusive: number;
  tax_breakdown: External$TaxProductResourceTaxBreakdown[];
  tax_date: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculation
 */
const SchemaIn$TaxCalculation: z.ZodType<
  TaxCalculation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_total: z.number().int(),
    currency: z.string(),
    customer: z.string().nullable().optional(),
    customer_details: Schemas$TaxProductResourceCustomerDetails.in,
    expires_at: z.number().int().nullable().optional(),
    id: z.string().nullable().optional(),
    line_items: Schemas$TaxCalculationLineItems.in.nullable().optional(),
    livemode: z.boolean(),
    object: z.enum(["tax.calculation"]),
    ship_from_details: Schemas$TaxProductResourceShipFromDetails.in.optional(),
    shipping_cost:
      Schemas$TaxProductResourceTaxCalculationShippingCost.in.optional(),
    tax_amount_exclusive: z.number().int(),
    tax_amount_inclusive: z.number().int(),
    tax_breakdown: z.array(Schemas$TaxProductResourceTaxBreakdown.in),
    tax_date: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_total: "amountTotal",
      currency: "currency",
      customer: "customer",
      customer_details: "customerDetails",
      expires_at: "expiresAt",
      id: "id",
      line_items: "lineItems",
      livemode: "livemode",
      object: "object",
      ship_from_details: "shipFromDetails",
      shipping_cost: "shippingCost",
      tax_amount_exclusive: "taxAmountExclusive",
      tax_amount_inclusive: "taxAmountInclusive",
      tax_breakdown: "taxBreakdown",
      tax_date: "taxDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculation
 */
const SchemaOut$TaxCalculation: z.ZodType<
  External$TaxCalculation, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculation // the object to be transformed
> = z
  .object({
    amountTotal: z.number().int(),
    currency: z.string(),
    customer: z.string().nullable().optional(),
    customerDetails: Schemas$TaxProductResourceCustomerDetails.out,
    expiresAt: z.number().int().nullable().optional(),
    id: z.string().nullable().optional(),
    lineItems: Schemas$TaxCalculationLineItems.out.nullable().optional(),
    livemode: z.boolean(),
    object: z.enum(["tax.calculation"]),
    shipFromDetails: Schemas$TaxProductResourceShipFromDetails.out.optional(),
    shippingCost:
      Schemas$TaxProductResourceTaxCalculationShippingCost.out.optional(),
    taxAmountExclusive: z.number().int(),
    taxAmountInclusive: z.number().int(),
    taxBreakdown: z.array(Schemas$TaxProductResourceTaxBreakdown.out),
    taxDate: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTotal: "amount_total",
      currency: "currency",
      customer: "customer",
      customerDetails: "customer_details",
      expiresAt: "expires_at",
      id: "id",
      lineItems: "line_items",
      livemode: "livemode",
      object: "object",
      shipFromDetails: "ship_from_details",
      shippingCost: "shipping_cost",
      taxAmountExclusive: "tax_amount_exclusive",
      taxAmountInclusive: "tax_amount_inclusive",
      taxBreakdown: "tax_breakdown",
      taxDate: "tax_date",
    });
  });

export const Schemas$TaxCalculation = {
  in: SchemaIn$TaxCalculation,
  out: SchemaOut$TaxCalculation,
};
