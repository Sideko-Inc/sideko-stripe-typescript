import {
  External$PackageDimensions,
  PackageDimensions,
  Schemas$PackageDimensions,
} from "./package-dimensions";
import { External$Price, Price, Schemas$Price } from "./price";
import {
  External$ProductMarketingFeature,
  ProductMarketingFeature,
  Schemas$ProductMarketingFeature,
} from "./product-marketing-feature";
import {
  External$ProductMetadata,
  ProductMetadata,
  Schemas$ProductMetadata,
} from "./product-metadata";
import { External$TaxCode, Schemas$TaxCode, TaxCode } from "./tax-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Products describe the specific goods or services you offer to your customers.
 * For example, you might offer a Standard and Premium version of your goods or service; each version would be a separate Product.
 * They can be used in conjunction with [Prices](https://stripe.com/docs/api#prices) to configure pricing in Payment Links, Checkout, and Subscriptions.
 *
 * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription),
 * [share a Payment Link](https://stripe.com/docs/payment-links),
 * [accept payments with Checkout](https://stripe.com/docs/payments/accept-a-payment#create-product-prices-upfront),
 * and more about [Products and Prices](https://stripe.com/docs/products-prices/overview)
 */
export type Product = {
  /**
   * Whether the product is currently available for purchase.
   */
  active: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
   */
  defaultPrice?: (string | Price) | undefined;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images: string[];
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
   */
  marketingFeatures: ProductMarketingFeature[];
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: ProductMetadata;
  /**
   * The product's name, meant to be displayable to the customer.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "product";
  packageDimensions?: PackageDimensions | undefined;
  /**
   * Whether this product is shipped (i.e., physical goods).
   */
  shippable?: boolean | null | undefined;
  /**
   * Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used. Only used for subscription payments.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: (string | TaxCode) | undefined;
  /**
   * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
   */
  unitLabel?: string | null | undefined;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * A URL of a publicly-accessible webpage for this product.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * Product without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Product = {
  active: boolean;
  created: number;
  default_price?: (string | External$Price) | undefined;
  description?: string | null | undefined;
  id: string;
  images: string[];
  livemode: boolean;
  marketing_features: External$ProductMarketingFeature[];
  metadata: External$ProductMetadata;
  name: string;
  object: "product";
  package_dimensions?: External$PackageDimensions | undefined;
  shippable?: boolean | null | undefined;
  statement_descriptor?: string | null | undefined;
  tax_code?: (string | External$TaxCode) | undefined;
  unit_label?: string | null | undefined;
  updated: number;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Product
 */
const SchemaIn$Product: z.ZodType<
  Product, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    created: z.number().int(),
    default_price: z
      .union([z.string(), z.lazy(() => Schemas$Price.in)])
      .optional(),
    description: z.string().nullable().optional(),
    id: z.string(),
    images: z.array(z.string()),
    livemode: z.boolean(),
    marketing_features: z.array(Schemas$ProductMarketingFeature.in),
    metadata: Schemas$ProductMetadata.in,
    name: z.string(),
    object: z.enum(["product"]),
    package_dimensions: Schemas$PackageDimensions.in.optional(),
    shippable: z.boolean().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
    tax_code: z.union([z.string(), Schemas$TaxCode.in]).optional(),
    unit_label: z.string().nullable().optional(),
    updated: z.number().int(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      default_price: "defaultPrice",
      description: "description",
      id: "id",
      images: "images",
      livemode: "livemode",
      marketing_features: "marketingFeatures",
      metadata: "metadata",
      name: "name",
      object: "object",
      package_dimensions: "packageDimensions",
      shippable: "shippable",
      statement_descriptor: "statementDescriptor",
      tax_code: "taxCode",
      unit_label: "unitLabel",
      updated: "updated",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Product
 */
const SchemaOut$Product: z.ZodType<
  External$Product, // output type of this zod object
  z.ZodTypeDef,
  Product // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    created: z.number().int(),
    defaultPrice: z
      .union([z.string(), z.lazy(() => Schemas$Price.out)])
      .optional(),
    description: z.string().nullable().optional(),
    id: z.string(),
    images: z.array(z.string()),
    livemode: z.boolean(),
    marketingFeatures: z.array(Schemas$ProductMarketingFeature.out),
    metadata: Schemas$ProductMetadata.out,
    name: z.string(),
    object: z.enum(["product"]),
    packageDimensions: Schemas$PackageDimensions.out.optional(),
    shippable: z.boolean().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
    taxCode: z.union([z.string(), Schemas$TaxCode.out]).optional(),
    unitLabel: z.string().nullable().optional(),
    updated: z.number().int(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      defaultPrice: "default_price",
      description: "description",
      id: "id",
      images: "images",
      livemode: "livemode",
      marketingFeatures: "marketing_features",
      metadata: "metadata",
      name: "name",
      object: "object",
      packageDimensions: "package_dimensions",
      shippable: "shippable",
      statementDescriptor: "statement_descriptor",
      taxCode: "tax_code",
      unitLabel: "unit_label",
      updated: "updated",
      url: "url",
    });
  });

export const Schemas$Product = {
  in: SchemaIn$Product,
  out: SchemaOut$Product,
};
