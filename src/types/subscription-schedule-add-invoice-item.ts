import {
  DeletedPrice,
  External$DeletedPrice,
  Schemas$DeletedPrice,
} from "./deleted-price";
import {
  DiscountsResourceStackableDiscount,
  External$DiscountsResourceStackableDiscount,
  Schemas$DiscountsResourceStackableDiscount,
} from "./discounts-resource-stackable-discount";
import { External$Price, Price, Schemas$Price } from "./price";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An Add Invoice Item describes the prices and quantities that will be added as pending invoice items when entering a phase.
 */
export type SubscriptionScheduleAddInvoiceItem = {
  /**
   * The stackable discounts that will be applied to the item.
   */
  discounts: DiscountsResourceStackableDiscount[];
  /**
   * ID of the price used to generate the invoice item.
   */
  price: string | Price | DeletedPrice;
  /**
   * The quantity of the invoice item.
   */
  quantity?: number | null | undefined;
  /**
   * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
   */
  taxRates?: TaxRate[] | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleAddInvoiceItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleAddInvoiceItem = {
  discounts: External$DiscountsResourceStackableDiscount[];
  price: string | External$Price | External$DeletedPrice;
  quantity?: number | null | undefined;
  tax_rates?: External$TaxRate[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleAddInvoiceItem
 */
const SchemaIn$SubscriptionScheduleAddInvoiceItem: z.ZodType<
  SubscriptionScheduleAddInvoiceItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceStackableDiscount.in),
    ),
    price: z.union([
      z.string(),
      z.lazy(() => Schemas$Price.in),
      Schemas$DeletedPrice.in,
    ]),
    quantity: z.number().int().nullable().optional(),
    tax_rates: z.array(Schemas$TaxRate.in).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      price: "price",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleAddInvoiceItem
 */
const SchemaOut$SubscriptionScheduleAddInvoiceItem: z.ZodType<
  External$SubscriptionScheduleAddInvoiceItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleAddInvoiceItem // the object to be transformed
> = z
  .object({
    discounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceStackableDiscount.out),
    ),
    price: z.union([
      z.string(),
      z.lazy(() => Schemas$Price.out),
      Schemas$DeletedPrice.out,
    ]),
    quantity: z.number().int().nullable().optional(),
    taxRates: z.array(Schemas$TaxRate.out).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      price: "price",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionScheduleAddInvoiceItem = {
  in: SchemaIn$SubscriptionScheduleAddInvoiceItem,
  out: SchemaOut$SubscriptionScheduleAddInvoiceItem,
};
