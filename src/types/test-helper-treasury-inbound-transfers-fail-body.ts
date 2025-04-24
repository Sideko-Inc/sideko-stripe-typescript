import {
  External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
  Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
  TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
} from "./test-helper-treasury-inbound-transfers-fail-body-failure-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryInboundTransfersFailBody
 */
export type TestHelperTreasuryInboundTransfersFailBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about a failed InboundTransfer.
   */
  failureDetails?:
    | TestHelperTreasuryInboundTransfersFailBodyFailureDetails
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TestHelperTreasuryInboundTransfersFailBodyFailureDetails | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryInboundTransfersFailBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryInboundTransfersFailBody = {
  expand?: string[] | undefined;
  failure_details?:
    | External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails
        | undefined
      )
    | External$TestHelperTreasuryInboundTransfersFailBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryInboundTransfersFailBody
 */
const SchemaIn$TestHelperTreasuryInboundTransfersFailBody: z.ZodType<
  TestHelperTreasuryInboundTransfersFailBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    failure_details:
      Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      failure_details: "failureDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryInboundTransfersFailBody
 */
const SchemaOut$TestHelperTreasuryInboundTransfersFailBody: z.ZodType<
  External$TestHelperTreasuryInboundTransfersFailBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryInboundTransfersFailBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    failureDetails:
      Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      failureDetails: "failure_details",
    });
  });

export const Schemas$TestHelperTreasuryInboundTransfersFailBody = {
  in: SchemaIn$TestHelperTreasuryInboundTransfersFailBody,
  out: SchemaOut$TestHelperTreasuryInboundTransfersFailBody,
};
