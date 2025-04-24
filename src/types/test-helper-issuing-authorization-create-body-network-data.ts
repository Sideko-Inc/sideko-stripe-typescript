import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about the authorization, such as identifiers, set by the card network.
 */
export type TestHelperIssuingAuthorizationCreateBodyNetworkData = {
  acquiringInstitutionId?: string | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyNetworkData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyNetworkData = {
  acquiring_institution_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyNetworkData
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyNetworkData: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyNetworkData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acquiring_institution_id: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acquiring_institution_id: "acquiringInstitutionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyNetworkData
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyNetworkData: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyNetworkData, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyNetworkData // the object to be transformed
> = z
  .object({
    acquiringInstitutionId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acquiringInstitutionId: "acquiring_institution_id",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyNetworkData = {
  in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyNetworkData,
  out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyNetworkData,
};
