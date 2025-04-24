import {
  External$ProductUpdateBodyMarketingFeaturesArr0Item,
  ProductUpdateBodyMarketingFeaturesArr0Item,
  Schemas$ProductUpdateBodyMarketingFeaturesArr0Item,
} from "./product-update-body-marketing-features-arr0-item";
import {
  External$ProductUpdateBodyMetadataObj0,
  ProductUpdateBodyMetadataObj0,
  Schemas$ProductUpdateBodyMetadataObj0,
} from "./product-update-body-metadata-obj0";
import {
  External$ProductUpdateBodyPackageDimensionsObj0,
  ProductUpdateBodyPackageDimensionsObj0,
  Schemas$ProductUpdateBodyPackageDimensionsObj0,
} from "./product-update-body-package-dimensions-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductUpdateBody
 */
export type ProductUpdateBody = {
  /**
   * Whether the product is available for purchase.
   */
  active?: boolean | undefined;
  /**
   * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
   */
  defaultPrice?: string | undefined;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description?: (string | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images?: (string[] | string) | undefined;
  /**
   * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
   */
  marketingFeatures?:
    | (ProductUpdateBodyMarketingFeaturesArr0Item[] | string)
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ProductUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The product's name, meant to be displayable to the customer.
   */
  name?: string | undefined;
  /**
   * The dimensions of this product for shipping purposes.
   */
  packageDimensions?:
    | (ProductUpdateBodyPackageDimensionsObj0 | string)
    | undefined;
  /**
   * Whether this product is shipped (i.e., physical goods).
   */
  shippable?: boolean | undefined;
  /**
   * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
   *
   * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
   *  It must contain at least one letter. May only be set if `type=service`. Only used for subscription payments.
   */
  statementDescriptor?: string | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: (string | string) | undefined;
  /**
   * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal. May only be set if `type=service`.
   */
  unitLabel?: (string | string) | undefined;
  /**
   * A URL of a publicly-accessible webpage for this product.
   */
  url?: (string | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | ((string[] | string) | undefined)
    | ((ProductUpdateBodyMarketingFeaturesArr0Item[] | string) | undefined)
    | ((ProductUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | ((ProductUpdateBodyPackageDimensionsObj0 | string) | undefined)
    | (boolean | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ProductUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductUpdateBody = {
  active?: boolean | undefined;
  default_price?: string | undefined;
  description?: (string | string) | undefined;
  expand?: string[] | undefined;
  images?: (string[] | string) | undefined;
  marketing_features?:
    | (External$ProductUpdateBodyMarketingFeaturesArr0Item[] | string)
    | undefined;
  metadata?: (External$ProductUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  package_dimensions?:
    | (External$ProductUpdateBodyPackageDimensionsObj0 | string)
    | undefined;
  shippable?: boolean | undefined;
  statement_descriptor?: string | undefined;
  tax_code?: (string | string) | undefined;
  unit_label?: (string | string) | undefined;
  url?: (string | string) | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | ((string[] | string) | undefined)
    | (
        | (External$ProductUpdateBodyMarketingFeaturesArr0Item[] | string)
        | undefined
      )
    | ((External$ProductUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | ((External$ProductUpdateBodyPackageDimensionsObj0 | string) | undefined)
    | (boolean | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | External$ProductUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductUpdateBody
 */
const SchemaIn$ProductUpdateBody: z.ZodType<
  ProductUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    default_price: z.string().optional(),
    description: z.union([z.string(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    images: z.union([z.array(z.string()), z.string()]).optional(),
    marketing_features: z
      .union([
        z.array(Schemas$ProductUpdateBodyMarketingFeaturesArr0Item.in),
        z.string(),
      ])
      .optional(),
    metadata: z
      .union([Schemas$ProductUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    package_dimensions: z
      .union([Schemas$ProductUpdateBodyPackageDimensionsObj0.in, z.string()])
      .optional(),
    shippable: z.boolean().optional(),
    statement_descriptor: z.string().optional(),
    tax_code: z.union([z.string(), z.string()]).optional(),
    unit_label: z.union([z.string(), z.string()]).optional(),
    url: z.union([z.string(), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      default_price: "defaultPrice",
      description: "description",
      expand: "expand",
      images: "images",
      marketing_features: "marketingFeatures",
      metadata: "metadata",
      name: "name",
      package_dimensions: "packageDimensions",
      shippable: "shippable",
      statement_descriptor: "statementDescriptor",
      tax_code: "taxCode",
      unit_label: "unitLabel",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductUpdateBody
 */
const SchemaOut$ProductUpdateBody: z.ZodType<
  External$ProductUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  ProductUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    defaultPrice: z.string().optional(),
    description: z.union([z.string(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    images: z.union([z.array(z.string()), z.string()]).optional(),
    marketingFeatures: z
      .union([
        z.array(Schemas$ProductUpdateBodyMarketingFeaturesArr0Item.out),
        z.string(),
      ])
      .optional(),
    metadata: z
      .union([Schemas$ProductUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    packageDimensions: z
      .union([Schemas$ProductUpdateBodyPackageDimensionsObj0.out, z.string()])
      .optional(),
    shippable: z.boolean().optional(),
    statementDescriptor: z.string().optional(),
    taxCode: z.union([z.string(), z.string()]).optional(),
    unitLabel: z.union([z.string(), z.string()]).optional(),
    url: z.union([z.string(), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      defaultPrice: "default_price",
      description: "description",
      expand: "expand",
      images: "images",
      marketingFeatures: "marketing_features",
      metadata: "metadata",
      name: "name",
      packageDimensions: "package_dimensions",
      shippable: "shippable",
      statementDescriptor: "statement_descriptor",
      taxCode: "tax_code",
      unitLabel: "unit_label",
      url: "url",
    });
  });

export const Schemas$ProductUpdateBody = {
  in: SchemaIn$ProductUpdateBody,
  out: SchemaOut$ProductUpdateBody,
};
