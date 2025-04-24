import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperCustomerFundCashBalanceBody
 */
export type TestHelperCustomerFundCashBalanceBody = {
  /**
   * Amount to be used for this test cash balance transaction. A positive integer representing how much to fund in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to fund $1.00 or 100 to fund ¥100, a zero-decimal currency).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A description of the test funding. This simulates free-text references supplied by customers when making bank transfers to their cash balance. You can use this to test how Stripe's [reconciliation algorithm](https://stripe.com/docs/payments/customer-balance/reconciliation) applies to different user inputs.
   */
  reference?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string[] | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperCustomerFundCashBalanceBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperCustomerFundCashBalanceBody = {
  amount: number;
  currency: string;
  expand?: string[] | undefined;
  reference?: string | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string[] | undefined)
    | (string | undefined)
    | External$TestHelperCustomerFundCashBalanceBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperCustomerFundCashBalanceBody
 */
const SchemaIn$TestHelperCustomerFundCashBalanceBody: z.ZodType<
  TestHelperCustomerFundCashBalanceBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    reference: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      expand: "expand",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperCustomerFundCashBalanceBody
 */
const SchemaOut$TestHelperCustomerFundCashBalanceBody: z.ZodType<
  External$TestHelperCustomerFundCashBalanceBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperCustomerFundCashBalanceBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    reference: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      expand: "expand",
      reference: "reference",
    });
  });

export const Schemas$TestHelperCustomerFundCashBalanceBody = {
  in: SchemaIn$TestHelperCustomerFundCashBalanceBody,
  out: SchemaOut$TestHelperCustomerFundCashBalanceBody,
};
