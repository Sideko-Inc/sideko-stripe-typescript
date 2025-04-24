import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationFraudChallengesRespondBody
 */
export type TestHelperIssuingAuthorizationFraudChallengesRespondBody = {
  /**
   * Whether to simulate the user confirming that the transaction was legitimate (true) or telling Stripe that it was fraudulent (false).
   */
  confirmed: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | boolean
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationFraudChallengesRespondBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationFraudChallengesRespondBody =
  {
    confirmed: boolean;
    expand?: string[] | undefined;

    [additionalProperty: string]:
      | boolean
      | (string[] | undefined)
      | External$TestHelperIssuingAuthorizationFraudChallengesRespondBody
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationFraudChallengesRespondBody
 */
const SchemaIn$TestHelperIssuingAuthorizationFraudChallengesRespondBody: z.ZodType<
  TestHelperIssuingAuthorizationFraudChallengesRespondBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    confirmed: z.boolean(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      confirmed: "confirmed",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationFraudChallengesRespondBody
 */
const SchemaOut$TestHelperIssuingAuthorizationFraudChallengesRespondBody: z.ZodType<
  External$TestHelperIssuingAuthorizationFraudChallengesRespondBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationFraudChallengesRespondBody // the object to be transformed
> = z
  .object({
    confirmed: z.boolean(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      confirmed: "confirmed",
      expand: "expand",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationFraudChallengesRespondBody =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationFraudChallengesRespondBody,
    out: SchemaOut$TestHelperIssuingAuthorizationFraudChallengesRespondBody,
  };
