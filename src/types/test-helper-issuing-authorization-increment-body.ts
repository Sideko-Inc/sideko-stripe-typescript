import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationIncrementBody
 */
export type TestHelperIssuingAuthorizationIncrementBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The amount to increment the authorization by. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  incrementAmount: number;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationIncrementBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationIncrementBody = {
  expand?: string[] | undefined;
  increment_amount: number;
  is_amount_controllable?: boolean | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | (boolean | undefined)
    | External$TestHelperIssuingAuthorizationIncrementBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationIncrementBody
 */
const SchemaIn$TestHelperIssuingAuthorizationIncrementBody: z.ZodType<
  TestHelperIssuingAuthorizationIncrementBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    increment_amount: z.number().int(),
    is_amount_controllable: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      increment_amount: "incrementAmount",
      is_amount_controllable: "isAmountControllable",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationIncrementBody
 */
const SchemaOut$TestHelperIssuingAuthorizationIncrementBody: z.ZodType<
  External$TestHelperIssuingAuthorizationIncrementBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationIncrementBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    incrementAmount: z.number().int(),
    isAmountControllable: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      incrementAmount: "increment_amount",
      isAmountControllable: "is_amount_controllable",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationIncrementBody = {
  in: SchemaIn$TestHelperIssuingAuthorizationIncrementBody,
  out: SchemaOut$TestHelperIssuingAuthorizationIncrementBody,
};
