import {
  External$LineItemsDiscountAmount,
  LineItemsDiscountAmount,
  Schemas$LineItemsDiscountAmount,
} from "./line-items-discount-amount";
import {
  External$LineItemsTaxAmount,
  LineItemsTaxAmount,
  Schemas$LineItemsTaxAmount,
} from "./line-items-tax-amount";
import { External$Price, Price, Schemas$Price } from "./price";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A line item.
 */
export type Item = {
  /**
   * Total discount amount applied. If no discounts were applied, defaults to 0.
   */
  amountDiscount: number;
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total tax amount applied. If no tax was applied, defaults to 0.
   */
  amountTax: number;
  /**
   * Total after discounts and taxes.
   */
  amountTotal: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
   */
  description?: string | null | undefined;
  /**
   * The discounts applied to the line item.
   */
  discounts?: LineItemsDiscountAmount[] | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "item";
  /**
   * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
   * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
   *
   * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
   *
   * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
   */
  price?: Price | undefined;
  /**
   * The quantity of products being purchased.
   */
  quantity?: number | null | undefined;
  /**
   * The taxes applied to the line item.
   */
  taxes?: LineItemsTaxAmount[] | undefined;
};

/**
 * @internal
 * Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Item = {
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description?: string | null | undefined;
  discounts?: External$LineItemsDiscountAmount[] | undefined;
  id: string;
  object: "item";
  price?: External$Price | undefined;
  quantity?: number | null | undefined;
  taxes?: External$LineItemsTaxAmount[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Item
 */
const SchemaIn$Item: z.ZodType<
  Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_discount: z.number().int(),
    amount_subtotal: z.number().int(),
    amount_tax: z.number().int(),
    amount_total: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    discounts: z
      .array(z.lazy(() => Schemas$LineItemsDiscountAmount.in))
      .optional(),
    id: z.string(),
    object: z.enum(["item"]),
    price: z.lazy(() => Schemas$Price.in.optional()),
    quantity: z.number().int().nullable().optional(),
    taxes: z.array(Schemas$LineItemsTaxAmount.in).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_discount: "amountDiscount",
      amount_subtotal: "amountSubtotal",
      amount_tax: "amountTax",
      amount_total: "amountTotal",
      currency: "currency",
      description: "description",
      discounts: "discounts",
      id: "id",
      object: "object",
      price: "price",
      quantity: "quantity",
      taxes: "taxes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Item
 */
const SchemaOut$Item: z.ZodType<
  External$Item, // output type of this zod object
  z.ZodTypeDef,
  Item // the object to be transformed
> = z
  .object({
    amountDiscount: z.number().int(),
    amountSubtotal: z.number().int(),
    amountTax: z.number().int(),
    amountTotal: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    discounts: z
      .array(z.lazy(() => Schemas$LineItemsDiscountAmount.out))
      .optional(),
    id: z.string(),
    object: z.enum(["item"]),
    price: z.lazy(() => Schemas$Price.out.optional()),
    quantity: z.number().int().nullable().optional(),
    taxes: z.array(Schemas$LineItemsTaxAmount.out).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountDiscount: "amount_discount",
      amountSubtotal: "amount_subtotal",
      amountTax: "amount_tax",
      amountTotal: "amount_total",
      currency: "currency",
      description: "description",
      discounts: "discounts",
      id: "id",
      object: "object",
      price: "price",
      quantity: "quantity",
      taxes: "taxes",
    });
  });

export const Schemas$Item = {
  in: SchemaIn$Item,
  out: SchemaOut$Item,
};
