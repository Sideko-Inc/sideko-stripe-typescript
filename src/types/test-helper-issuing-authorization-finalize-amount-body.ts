import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
} from "./test-helper-issuing-authorization-finalize-amount-body-fleet";
import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFuel,
} from "./test-helper-issuing-authorization-finalize-amount-body-fuel";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationFinalizeAmountBody
 */
export type TestHelperIssuingAuthorizationFinalizeAmountBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The final authorization amount that will be captured by the merchant. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  finalAmount: number;
  /**
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet?: TestHelperIssuingAuthorizationFinalizeAmountBodyFleet | undefined;
  /**
   * Information about fuel that was purchased with this transaction.
   */
  fuel?: TestHelperIssuingAuthorizationFinalizeAmountBodyFuel | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | (TestHelperIssuingAuthorizationFinalizeAmountBodyFleet | undefined)
    | (TestHelperIssuingAuthorizationFinalizeAmountBodyFuel | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationFinalizeAmountBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationFinalizeAmountBody = {
  expand?: string[] | undefined;
  final_amount: number;
  fleet?:
    | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet
    | undefined;
  fuel?:
    | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | (
        | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet
        | undefined
      )
    | (
        | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel
        | undefined
      )
    | External$TestHelperIssuingAuthorizationFinalizeAmountBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationFinalizeAmountBody
 */
const SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBody: z.ZodType<
  TestHelperIssuingAuthorizationFinalizeAmountBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    final_amount: z.number().int(),
    fleet:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet.in.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      final_amount: "finalAmount",
      fleet: "fleet",
      fuel: "fuel",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationFinalizeAmountBody
 */
const SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBody: z.ZodType<
  External$TestHelperIssuingAuthorizationFinalizeAmountBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationFinalizeAmountBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    finalAmount: z.number().int(),
    fleet:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet.out.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      finalAmount: "final_amount",
      fleet: "fleet",
      fuel: "fuel",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationFinalizeAmountBody = {
  in: SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBody,
  out: SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBody,
};
